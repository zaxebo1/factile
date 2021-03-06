$(document).ready(function() {
  $("#response_form").submit(function(e) {
    var valid = isFormValid();
    if (offline && valid) {
      e.preventDefault();
      valid = false;
      // serializeArray is awesome and powerful
      var data = $(this).serializeArray();
      // iterate over results
      $.each(data, function(i, obj) {
        // HTML5 magic!!
        localStorage.setItem(obj.name, obj.value);
      });

      var page = parseInt($("input[name=pageNum]").val());
      $("input[name=pageNum]").val(page + 1);
      $(this).find(".row:not(:last-child)").remove();
      $('#errorNotice').hide();
      if (surveyJson == null) surveyJson = Json.parse(localStorage.getItem("survey"));
      if (surveyJson != null) {
        var p = 1;
        var found = false;
        var count = 0;
        var inc = 1;
        for (var i=0; i<surveyJson.questions.length; i++) {
          var q = surveyJson.questions[i];

          if (p == (page + inc)) {
            found = true;
            addQuestion(q);
          } else if (p > (page + inc)) {
            break;
          } else {
            count++;
          }

          if(q.qType == "page") {
            p++;
            var cond = true;
            for(var x=0; x<q.conditions.length; x++) {
              var res = false;
              if ((q.conditions[x].op == 'eq' && (localStorage.getItem(q.conditions[x].questionId) == q.conditions[x].value)) || 
                (q.conditions[x].op == 'ne' && (localStorage.getItem(q.conditions[x].questionId) != q.conditions[x].value)) ||
                (q.conditions[x].op == 'like' && (localStorage.getItem(q.conditions[x].questionId).indexOf(q.conditions[x].value) != -1)) ||
                (q.conditions[x].op == 'notlike' && (localStorage.getItem(q.conditions[x].questionId).indexOf(q.conditions[x].value) == -1))) {
                res = true;
              }
              if (!q.conditions[x].display) res = !res; 
              cond = cond && res;
            }
            if (!cond) inc++;
          }
        }
        if (!found) {
          addLastNote(surveyJson.thank_you_text);
          if (surveyJson.layout.includeProgress) $(".bar").attr('style','width: ' + 100 + '%;');
        } else {
          if (surveyJson.layout.includeProgress) $(".bar").attr('style','width: ' + (count/ surveyJson.questions.length) * 100 + '%;');
        }
      }
    }
    return valid;
  });
});

function isFormValid() {
  var valid = true;
  var first = true;
  $("#response_form").find("input.required:text").each(function() {
    if (!$(this).val() || $(this).val() == "") {
      valid = false;
      $(this).attr('class', $(this).attr('class') + ' error');
      if (first) {
        $(this).focus();
        first = false;
      }
    } else {
      $(this).attr('class', $(this).attr('class').replace(' error', ''));
    }
  });

  $("#response_form").find("textarea.required").each(function() {
    if (!$(this).val() || $(this).val() == "") {
      valid = false;
      $(this).attr('class', $(this).attr('class') + ' error');
    } else {
      $(this).attr('class', $(this).attr('class').replace(' error', ''));
    }
  });

  $("#response_form").find("input.required:radio").each(function() {
    valid = validateOptions($(this).parent(), 'input:radio') && valid;
  });

  $("#response_form").find("input.required:checkbox").each(function() {
    valid = validateOptions($(this).parent(), 'input:checkbox') && valid;
  });

  $("#response_form").find("select.required").each(function() {
    var x = false;
    $(this).find("option").each(function() {
      if (!x && $(this).attr("selected") == "selected" && $(this).val() != "" ) {
        x = true;
      }
    });
    var parent = $(this).parent();
    if (!x) {
      valid = false;
      parent.attr('class', parent.attr('class') + ' error');
    } else {
      parent.attr('class', parent.attr('class').replace(' error', ''));
    }
  });

  if(!valid) {
    $('#errorNotice').attr('class', "alert alert-error");
    $('#errorNotice').html("Please provide answers to the highlighted questions below.");
  } else {
    $('#errorNotice').attr('class', "");
    $('#errorNotice').html("");
  }

  return valid;
 }

function validateOptions(parent, inputtype) {
	var x = false;
  var obj = parent.closest(".required");
	obj.find(inputtype).each(function() {
		if (!x && $(this).attr("checked")) {
			x = true;
		}
	});

  if (!x) {
	  obj.attr('class', obj.attr('class') + ' error');
  } else {
	  obj.attr('class', obj.attr('class').replace(' error', ''));
  }

  return x;
}
