var score = 0;

$( function() {
  $("#ball1, #tree-star, #ball2, #ball3, #ball4, #ball5, #ball6, #bow, #bow2, #bow3 ").draggable({ revert: "invalid" });
  $("#dropzone, #dropzone-1, #dropzone-2").droppable({
      accept: "#ball1, #tree-star, #ball2, #ball3, #ball4, #ball5, #ball6, #bow, #bow2, #bow3 ",
      classes: {
        "ui-droppable-active": "tree-active",},
      drop: function() {
    score++  
  finish();
  },
    });

function finish() {
  if(score === 12)
  {
    $('#game-complete').delay(300).fadeIn("fast");
       }
     }
   }); 