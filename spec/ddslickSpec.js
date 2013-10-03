describe('ddSlick', function(){
  context('using <select> to render', function(){
    beforeEach(function(){
      buildDropdown();

      $('#the-dropdown').ddslick({
        imagePosition: "right"
      });

      subject = $('#the-dropdown-dd-placeholder');
    });

    afterEach(function(){
      $("#the-dropdown").remove();
      $("#the-dropdown-dd-placeholder").remove();
    });
    
    it('creates the placeholder div', function(){
      expect(subject).toBeDefined();
    });

    it('should have a dd-select element', function(){
      expect(subject.find('.dd-select').length).toBeGreaterThan(0);
    });
    
  });
});

var buildDropdown = function(){
  $("<select id='the-dropdown'></select>").appendTo('body');
  $("<option data-imagesrc='spongebob.png' value='spongebob'>Spongebob</option>").appendTo('#the-dropdown');
  $("<option data-imagesrc='patrick.png' value='patrick'>Patrick</option>").appendTo('#the-dropdown');
  $("<option data-imagesrc='squidard.png' value='squidard'>Squidard</option>").appendTo('#the-dropdown');
};
