$(function(){
    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        blockId = $(this).data('scroll');
        blockOffset =$(blockId).offset().top;
       
        $("html, body").animate({
            scrollTop: blockOffset -50
        }, 700);

    });
    $("[data-modal]").on("click", function(event){
        event.preventDefault();

        $(modal_resume).addClass('show');
    });
    $(modal_resume).on("click", function() {
        $(modal_resume).removeClass('show');

    }) ;

});


let noOfCharas = 10;
let contents = document.querySeleqtorAll(".contetn");
contents.foreach(content=>{
    if(content.textContent.length < noOfCharas){
        content.nextElementSiblingStyle.disply="none";
    }
    else{
      let displyText = content.textContent.slice(0, noOfCharas);
      let moreText = content.textContent.slice(noOfCharas);
      content.innerHtml = `${displyText}<span class="dots>...</span><span class = "hide more">${moreText}</span>`;

    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
    btn.textContent=="Read More"?btn.textContent=="Read Less": btn.textContent=="Read More";
}