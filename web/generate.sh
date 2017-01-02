#!/bin/bash

echo "Select type of component:"
echo "1. Controller"
echo "2. Directive"
echo -n "Enter choice (1 or 2): "
read input


echo -n "Name of component:"
read name

formatted=`echo $name | sed -e 's/\([A-Z]\)/-\1/g' -e 's/^-//' | awk '{print tolower($0)}'`

echo $name $formatted

if [ $input -eq "1" ]
then
  mkdir src/app/$formatted

  echo "(function() {" > src/app/$formatted/$formatted.controller.js
  echo "    'use strict';" >> src/app/$formatted/$formatted.controller.js
  echo "    angular" >> src/app/$formatted/$formatted.controller.js
  echo "        .module('factileApp')" >> src/app/$formatted/$formatted.controller.js
  echo "        .controller('"$name"Controller', "$name"Controller);" >> src/app/$formatted/$formatted.controller.js
  echo "    /** @ngInject */" >> src/app/$formatted/$formatted.controller.js
  echo "    function "$name"Controller() {}" >> src/app/$formatted/$formatted.controller.js
  echo "})();" >> src/app/$formatted/$formatted.controller.js

  echo "(function() {" > src/app/$formatted/$formatted.controller.spec.js
  echo "    'use strict';" >> src/app/$formatted/$formatted.controller.spec.js
  echo >> src/app/$formatted/$formatted.controller.spec.js
  echo "    describe('controllers', function() {" >> src/app/$formatted/$formatted.controller.spec.js
  echo >> src/app/$formatted/$formatted.controller.spec.js
  echo "        beforeEach(module('factileApp'));" >> src/app/$formatted/$formatted.controller.spec.js
  echo "    });" >> src/app/$formatted/$formatted.controller.spec.js
  echo "})();" >> src/app/$formatted/$formatted.controller.spec.js

  echo "<div class=\"container\">" > src/app/$formatted/$formatted.html
  echo "    <div>" >> src/app/$formatted/$formatted.html
  echo "        <navbar />" >> src/app/$formatted/$formatted.html
  echo "    </div>" >> src/app/$formatted/$formatted.html
  echo "    <div class=\"jumbotron text-center\">" >> src/app/$formatted/$formatted.html
  echo "        <h1>Factile</h1>" >> src/app/$formatted/$formatted.html
  echo "        <p class=\"lead\">" >> src/app/$formatted/$formatted.html
  echo "            <br> Quickstart project for Angular + Gulp" >> src/app/$formatted/$formatted.html
  echo "        </p>" >> src/app/$formatted/$formatted.html
  echo "    </div>" >> src/app/$formatted/$formatted.html
  echo "    <footer />" >> src/app/$formatted/$formatted.html
  echo "</div>" >> src/app/$formatted/$formatted.html


  echo "Add the following to router"
  echo "----------------------------------"
  echo ".state('$formatted', {"
  echo "    url: '/$formatted',"
  echo "    templateUrl: 'app/$formatted/$formatted.html',"
  echo "    controller: '"$name"Controller',"
  echo "    controllerAs: '$formatted'"
  echo "})"

else
  mkdir src/app/components/$formatted
  touch src/app/components/$formatted/$formatted.directive.js
  touch src/app/components/$formatted/$formatted.html
  touch src/app/components/$formatted/$formatted.scss

  echo "(function() {" > src/app/components/$formatted/$formatted.directive.js
  echo "    'use strict';" >> src/app/components/$formatted/$formatted.directive.js
  echo >> src/app/components/$formatted/$formatted.directive.js
  echo "    angular" >> src/app/components/$formatted/$formatted.directive.js
  echo "        .module('factileApp')" >> src/app/components/$formatted/$formatted.directive.js
  echo "        .directive('$formatted', $formatted);" >> src/app/components/$formatted/$formatted.directive.js
  echo >> src/app/components/$formatted/$formatted.directive.js
  echo "    /** @ngInject */" >> src/app/components/$formatted/$formatted.directive.js
  echo "    function $formatted() {" >> src/app/components/$formatted/$formatted.directive.js
  echo "        var directive = {" >> src/app/components/$formatted/$formatted.directive.js
  echo "            restrict: 'E'," >> src/app/components/$formatted/$formatted.directive.js
  echo "            templateUrl: 'app/components/$formatted/$formatted.html'," >> src/app/components/$formatted/$formatted.directive.js
  echo "            scope: {" >> src/app/components/$formatted/$formatted.directive.js
  echo "            }," >> src/app/components/$formatted/$formatted.directive.js
  echo "            controller: "$name"Controller," >> src/app/components/$formatted/$formatted.directive.js
  echo "            controllerAs: 'vm'," >> src/app/components/$formatted/$formatted.directive.js
  echo "            bindToController: true" >> src/app/components/$formatted/$formatted.directive.js
  echo "        };" >> src/app/components/$formatted/$formatted.directive.js
  echo >> src/app/components/$formatted/$formatted.directive.js
  echo "        return directive;" >> src/app/components/$formatted/$formatted.directive.js
  echo >> src/app/components/$formatted/$formatted.directive.js
  echo "        /** @ngInject */" >> src/app/components/$formatted/$formatted.directive.js
  echo "        function "$name"Controller() {}" >> src/app/components/$formatted/$formatted.directive.js
  echo "    }" >> src/app/components/$formatted/$formatted.directive.js
  echo >> src/app/components/$formatted/$formatted.directive.js
  echo "})();" >> src/app/components/$formatted/$formatted.directive.js

fi
