define(['js/app', 'backbone', 'marionette', 'js/views/Menua/MenuaView', 'js/views/Egutegia/EgutegiaView', 'js/views/Albisteak/AlbisteakView', 'js/views/Argazkiak/ArgazkiakView', 'js/views/Argazkiak/ArgazkiCollection'],
    function (App, Backbone, Marionette, MenuaView, EgutegiaView, AlbisteakView, ArgazkiakView,ArgazkiCollection) {
    return Backbone.Marionette.Controller.extend({
        initialize:function (options) {
            //App.headerRegion.show(new HeaderView());
            App.sidebarRegion.show(new MenuaView());
        },
        clear: function(){
            clearTimeout(this.argazki_carousel);
            $(".nav-pills li").removeClass("active");
        },
        //gets mapped to in AppRouter's appRoutes
        egutegia:function () {
            this.clear();
            $("#egutegia").addClass("active");
            App.mainRegion.show(new EgutegiaView());
        },

        albisteak: function() {
            this.clear();
            $("#albisteak").addClass("active");
            App.mainRegion.show(new AlbisteakView());
        },

        argazkiak: function() {
            this.clear();
            $("#argazkiak").addClass("active");
            var argazki_collection,
                i=0,
                timestamp = Date.now();
                $.getJSON("js/views/Argazkiak/argazkiak.json?v="+timestamp, function(argazkiak) {
                    argazki_collection = new ArgazkiCollection(argazkiak, { view: this });
                    App.mainRegion.show(new ArgazkiakView({
                        model: argazki_collection.at(i)
                    }));
                });
                this.argazki_carousel = setInterval(function(){
                    i = (i >= argazki_collection.length-1) ? 0 : i+=1;
                    console.log(i);
                    App.mainRegion.show(new ArgazkiakView({
                        model: argazki_collection.at(i)
                    }));
                },20000);
        }
    });
});