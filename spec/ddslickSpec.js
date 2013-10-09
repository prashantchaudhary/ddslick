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
    
    context('has an image', function(){
      
      it('should have 3 option images', function(){
        expect(subject.find('.dd-option-image').length).toEqual(3);
      });
      
      context('does not have a description', function(){
        it('should not have a description', function(){
          expect(subject.find('.dd-option-description').length).toEqual(0);
        });

        describe('when the select box is clicked multiple times', function(){
          beforeEach(function(){
            subject.find('.dd-select')[0].click();
            subject.find('.dd-select')[0].click();
            subject.find('.dd-select')[0].click();
            subject.find('.dd-select')[0].click();
            
            optionItems = subject.find('.dd-option');
            firstItem = optionItems[0];
            secondItem = optionItems[1];
          });
          
          it('should have a height of 18px on the first item', function(){
            expect($(firstItem).css('height')).toEqual('18px');
          });

          it('should have a height of 36px on the second item', function(){
            expect($(secondItem).css('height')).toEqual('36px');
          });
        });

        describe('when the second option is chosen', function(){
          beforeEach(function(){
            subject.find('.dd-select')[0].click();
            squidward_option = subject.find('.dd-options li a')[1];
            squidward_option.click();

            selectedItem = subject.find('.dd-select');
          });
          
          it('should have a height of 56px', function(){
            expect($(selectedItem).css('height')).toEqual('56px');
          });

        });
      });
    });
  });
});

var buildDropdown = function(){
  $("<select id='the-dropdown'></select>").appendTo('body');
  $("<option data-imagesrc='src/images/apple.png' value='spongebob'>Spongebob</option>").appendTo('#the-dropdown');
  $("<option data-imagesrc='src/images/apple.png' value='squidward'>Squidward has a long description</option>").appendTo('#the-dropdown');
  $("<option data-imagesrc='src/images/apple.png' value='patrick'>Patrick</option>").appendTo('#the-dropdown');
};
