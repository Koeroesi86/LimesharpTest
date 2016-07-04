/**
 * Created by Krisztián on 04/07/2016.
 */

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

function repeat(inArray) {
    var outArray = new Array();
    if(typeof inArray == "undefined" || typeof inArray.join == "undefined") return outArray;
    for(var i = 0; i < 3; i++) {
        for(var cnt in inArray) {
            outArray.push(inArray[cnt]);
        }
    }

    return outArray;
}

function  reformat(inString) {  //Lmshrp dvlpr tst
    if(typeof inString !== "string") return "";

    return inString
            .toLowerCase()
            .replace(/[aeiou]/ig,'')
            .capitalizeFirstLetter();

}

function next_binary_number(inArray) {
    var outArray = new Array();
    if(typeof inArray == "undefined" || typeof inArray.join == "undefined") return outArray;

    outArray = inArray.join(''); //imploding array
    outArray = parseInt(outArray, 2) + 1; //conversion to number and add 1
    outArray = (outArray  >>> 0).toString(2); //convert back to binary format
    outArray = ("" + outArray).split("").map(function(val){ return parseInt(val); }); //exploding string back to array of integers

    return outArray;
}

(function($){
    function output(target, val) {
        $(target).parent().find('.result').html(JSON.stringify(val));
        console.log(val);
    }

    $(document).on('click', '.repeat', function (e) {
        e.preventDefault();

        output(e.target, repeat([1,2,3]));

    });

    $(document).on('click', '.reformat', function (e) {
        e.preventDefault();

        output(e.target, reformat("liMeSHArp DeveLoper TEST"));
    });

    $(document).on('click', '.next_binary_number', function (e) {
        e.preventDefault();

        output(e.target, next_binary_number([1,0]));
    });
})(jQuery);