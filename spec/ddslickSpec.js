describe('ddSlick', function(){
  context('using <select> to render', function(){
    beforeEach(function(){
      buildDropdown();
    });

    afterEach(function(){
      $("#the-dropdown").remove();
    });
    
    
    it('does some stuff', function(){
      var subject = $('#the-dropdown');
      subject.ddslick({
        imagePosition: "right"
      });
      console.log(subject);
    });
  });
});

var buildDropdown = function(){
  $("<select id='the-dropdown'></select>").appendTo('body');
  $("<option data-imagesrc='spongebob.png' value='spongebob'>Spongebob</option>").appendTo('#the-dropdown');
  $("<option data-imagesrc='patrick.png' value='patrick'>Patrick</option>").appendTo('#the-dropdown');
  $("<option data-imagesrc='squidard.png' value='squidard'>Squidard</option>").appendTo('#the-dropdown');
};
