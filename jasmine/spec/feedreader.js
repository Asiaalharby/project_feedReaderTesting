$(function() {
    // This is the first test suite 
    describe('RSS feeds', function() {
        // This tests that the all Feeds variable is defined and is not empty.
         
        it('all the feeds are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).toBeGreaterThan(0);
        });


        //this tests if all the URL are defined and is not empty.
         
        it('all the URL are defined', function() {
           for(var feed = 0; feed < allFeeds.length; feed++){
                expect(allFeeds[feed].url).toBeDefined();
                expect(allFeeds[feed].url.length).toBeGreaterThan(0);
            }
           
        });

        //this tests if name defined and is not empty.
         
        it('all the Names are defined', function() {
            for(var feed = 0; feed < allFeeds.length; feed++){
                expect(allFeeds[feed].name).toBeDefined();
                expect(allFeeds[feed].name.length).toBeGreaterThan(0);
            }
           
        });
    });


    describe('Menu', function() {

        // this tests if the menu is hidden by default.
        // store the body element in variable and test if the class 'menu-hidden' is there 
         
       
        it('Hidden by Default', function() {
             var body = document.getElementsByTagName("body");
            expect(body[0].classList.contains("menu-hidden")).toBe(true);
        }); 

         // this test ensures the menu changes visibility when the menu icon is clicked.
        it('Must Hiding and Showing', function() {
            var body = document.getElementsByTagName("body");
            //store the menuIcon link element in a varible
            var Icon = document.querySelector(".menu-icon-link");
            //simulate the click event by this function 
            Icon.click();
            expect(body[0].classList.contains("menu-hidden")).not.toBe(true);
            Icon.click();
            expect(body[0].classList.contains("menu-hidden")).toBe(true);
        
        }); 
    });

    describe('initial entries', function() {
        beforeEach(function(done) {
            loadFeed(0, function() {
            done();
            })
         });
        
        it('should be One entry At least', function(done) {
            var feed = document.querySelector('.feed').getElementsByClassName('entry')[0];
            expect(feed.length).not.toBe(0);
            done();
            })  
        });

        // this test tests if a new feed is loaded
    describe('New Feed is Loaded', function() {   
        var firstLoad, secLoad;   
        beforeEach(function(done) {
            loadFeed(0, function() {
                var firstFeed = document.getElementsByClassName('feed');
                firstLoad = firstFeed[0].innerHTML;
                loadFeed(1, function() {
                    var secFeed = document.getElementsByClassName('feed');
                    secLoad = secFeed[0].innerHTML;
                    done();
                });
            });
         });

        it('content have been changed', function(done) {
            //will will see if the two loads are equal or not 
            expect(firstLoad).not.toBe(secLoad);
            done();
            }); 
    });
}());
