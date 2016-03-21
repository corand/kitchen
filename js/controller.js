define(['js/app', 'backbone', 'marionette', 'js/views/Menua/MenuaView', 'js/views/Egutegia/EgutegiaView', 'js/views/Albisteak/AlbisteakView', 'js/views/Argazkiak/ArgazkiakView', 'js/views/Inaktibo/InaktiboView','js/views/Argazkiak/ArgazkiCollection', 'js/views/Albisteak/AlbisteCollection'],
    function (App, Backbone, Marionette, MenuaView, EgutegiaView, AlbisteakView, ArgazkiakView,InaktiboView, ArgazkiCollection, AlbisteCollection) {
    return Backbone.Marionette.Controller.extend({

        initialize:function (options) {
            var that = this;
            App.sidebarRegion.show(new MenuaView());
            this.albiste_collection = new AlbisteCollection();

            this.albiste_collection.fetch({
                reset: true,                
                success: function(){
                    that.albiste_collection.initialize();
                    console.log(that.albiste_collection);
                },
                error: function(){
                    alert("Errorea albisteen informazioa kargatzerakoan");
                }
            });

        },

        clear: function(){
            clearTimeout(this.effectTimeout);
            clearTimeout(this.argazki_carousel);
            clearTimeout(this.albiste_carousel);
            App.inaktibo.reset();
            $(".nav-pills li").removeClass("active");
        },

        egutegia:function () {
            this.clear();
            $("#egutegia").addClass("active");
            App.mainRegion.show(new EgutegiaView());
        },

        albisteak: function() {
            this.clear();
            var that = this;
            $("#albisteak").addClass("active");
            var albiste_collection,
                albiste_view;

            albiste_view = new AlbisteakView({ model: this.albiste_collection.getElement() });
            App.mainRegion.show(albiste_view);
            
            this.albiste_carousel = setInterval(function(){
                albiste_view.hide();
                this.effectTimeout = setTimeout(function(){
                    albiste_view = new AlbisteakView({ model: that.albiste_collection.getElement() });
                    App.mainRegion.show(albiste_view);
                },800);
            },20000);
        },

        argazkiak: function() {
            this.clear();
            $("#argazkiak").addClass("active");
            var argazki_collection,
                argazki_view;

            argazki_collection = new ArgazkiCollection();
            argazki_collection.fetch({
                reset: true,                
                success: function(){
                    argazki_collection.initialize();
                    argazki_view = new ArgazkiakView({ model: argazki_collection.getElement() });
                    App.mainRegion.show(argazki_view);
                },
                error: function(){
                    alert("Errorea argazkien informazioa kargatzerakoan");
                }
            });
            this.argazki_carousel = setInterval(function(){
                argazki_view.hide();
                this.effectTimeout = setTimeout(function(){
                    argazki_view = new ArgazkiakView({ model: argazki_collection.getElement() });
                    App.mainRegion.show(argazki_view);
                },800);
            },20000);

        },

        inaktibo: function(){
            this.clear();
            var argazki_collection,
                inaktibo_view;

            argazki_collection = new ArgazkiCollection();
            argazki_collection.fetch({
                reset: true,                
                success: function(){
                    argazki_collection.initialize();
                    inaktibo_view = new InaktiboView({ model: argazki_collection.getElement() });
                    App.inaktibo.show(inaktibo_view);
                },
                error: function(){
                    alert("Errorea argazkien informazioa kargatzerakoan");
                }
            });
            this.argazki_carousel = setInterval(function(){
                inaktibo_view.hide();
                this.effectTimeout = setTimeout(function(){
                    inaktibo_view = new InaktiboView({ model: argazki_collection.getElement() });
                    App.inaktibo.show(inaktibo_view);
                },800);
            },20000);
        }
    });
});