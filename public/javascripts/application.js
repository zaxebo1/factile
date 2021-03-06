function hide(id) {
	$('#' + id).hide();
}

function show(id) {
	$('#' + id).show();
}

function previewWindow(url) {
  var form = $('#survey_form');
  var w = window.innerWidth * 0.7; 
  var h = window.innerHeight * 0.7;
  for ( instance in CKEDITOR.instances ) {
    CKEDITOR.instances[instance].updateElement();
  }
  $.ajax({
      type: "POST",
      url: form.attr( 'action' ),
      data: form.serialize(),
      success: function( response ) {
        window.open(url,'preview','width=' + w +',height='+ h)
      }
    });
}

function manageFlow(url) {
  previewWindow(url);
}

function saveSurvey() {
  var form = $('#survey_form');
  for ( instance in CKEDITOR.instances ) {
    CKEDITOR.instances[instance].updateElement();
  }
  $.ajax({
      type: "POST",
      url: form.attr( 'action' ),
      data: form.serialize(),
      success: function( response) {
        var div = $("#savedMessage");
        if (div.length == 0) {
          $("<div class='alert alert-success' id='savedMessage'>The survey has been saved now.</div>").insertBefore("#page_nav_tabs")
        } else {
          div.fadeOut('slow', function() {
            div.fadeIn('slow');
          });
        }
        $("#savedMessage").delay(3000).fadeOut('slow');
      }
    });
}

$.fn.extend({
  insertAtCaret: function(myValue){
  var obj;
  if( typeof this[0].name !='undefined' ) obj = this[0];
  else obj = this;

  if ($.browser.msie) {
    obj.focus();
    sel = document.selection.createRange();
    sel.text = myValue;
    obj.focus();
    }
  else if ($.browser.mozilla || $.browser.webkit) {
    var startPos = obj.selectionStart;
    var endPos = obj.selectionEnd;
    var scrollTop = obj.scrollTop;
    obj.value = obj.value.substring(0, startPos)+myValue+obj.value.substring(endPos,obj.value.length);
    obj.focus();
    obj.selectionStart = startPos + myValue.length;
    obj.selectionEnd = startPos + myValue.length;
    obj.scrollTop = scrollTop;
  } else {
    obj.value += myValue;
    obj.focus();
   }
 }
});

function pipeQuestion(target, qId) {
  $("#" + target).insertAtCaret("{{" + qId + "}}"); 
  $("#piping").hide();
}

function moveQuestion(target, qId) {
  var qDiv = $("#" + target).parent().parent().parent();
  var newPosition = $("#" + qId + "_q").parent().parent().parent();
  qDiv.remove();
  qDiv.insertAfter(newPosition);
  $("#piping").hide();
}

function getQuestionsForPiping(obj, suffix) {
  showQuestionsList("pipeQuestion", obj, "_q", true)
}

function getQuestionsForMove(obj) {
  showQuestionsList("moveQuestion", obj, "_q", false)
}

function showQuestionsList(action, obj, suffix, pageCheck) {
  var pageId = obj.parentNode.parentNode.parentNode.parentNode.id;
  var questionId = $(obj.parentNode.parentNode).find('input[name="question[]"]').val();

  var html = "<ul>";
  $('#survey').children().each(function() {
    var id = $(this).attr("id");
    if (id == pageId && pageCheck) {
      return false;
    }
    if (html != "<ul>") {
      html += "<li class='divider'></li>";
    }

    $(this).find("input:text").each(function() {
      var qId = $(this).attr('id');
      if (qId.indexOf("_other_text") == -1) {
        var val = $(this).val();
        if (val.length > 80) { 
          val = val.substr(0, 80);
        }
        var click = "onclick='" + action + "(\"" + questionId + suffix + "\", \"" + qId.replace("_q", "") + "\");'";
        html += "<li " + click + "><a href='#'>" + val + "</a></li>";
      }
    });
  });

  html += "</ul>";

  if (html != "<ul></ul>") {
    var pos_x = $(obj).offset().left;
    var pos_y = $(obj).offset().top;

    $("#piping").html(html);
    $("#piping").css({
      top: (pos_y + 10),
      left: (pos_x + 10)
    });
    $("#piping").show();
  }
}

function passwordStrength() {
  var strongRegex = new RegExp("(?=.{6,}).*", "g");
  $('#passwordStrengthError').remove();
  if (!strongRegex.test($('#password').val())) {
    $('#password').parent().attr('class', 'control-group warning');
      $('#password').parent().append('<span id="passwordStrengthError" class="help-inline">You may want to have a stronger password (at least 6 characters long).</span>');
  } else {
      $('#password').parent().live("blur", function() {
      $('#passwordStrengthError').remove();
      });
  }
}

function verifyPassword(p1, p2) {
  var result = true;
  $('#passwordConfirmError').remove();
  if ($('#'+ p1).val() != $('#'+ p2).val()) {
    $('#' + p2).parent().attr('class', 'control-group error');
    $('#' + p2).parent().append('<span id="passwordConfirmError" class="help-inline">Please ensure that the 2 passwords match.</span>');
    result = false;
  } else {
    $('#' + p2).parent().attr('class', 'control-group');
  }

  return result;
}

$(document).ready(function() {
  $('input[placeholder], textarea[placeholder]').placeholder();
});
