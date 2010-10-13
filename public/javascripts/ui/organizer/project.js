dc.ui.Project = Backbone.View.extend({

  className : 'project box',

  events : {
    'click'             : 'showDocuments',
    'click .edit_glyph' : 'editProject'
  },

  constructor : function(options) {
    Backbone.View.call(this, options);
    _.bindAll(this, 'render');
    this.model.bind('change', this.render);
    this.model.view = this;
  },

  render : function() {
    var data = _.extend(this.model.toJSON(), {statistics : this.model.statistics()});
    $(this.el).html(JST['organizer/project'](data));
    $(this.el).attr({id : "project_" + this.model.cid, 'data-project-cid' : this.model.cid});
    this.setMode(this.model.get('selected') ? 'is' : 'not', 'selected');
    this.handleEvents();
    return this;
  },

  showDocuments : function(e) {
    if ($(e.target).hasClass('edit_glyph')) return false;
    this.model.open();
  },

  editProject : function(e) {
    $(document.body).append((new dc.ui.ProjectDialog({model : this.model})).render().el);
    return false;
  }

}, {

  // (Maybe) hightlight a project box for the current query.
  highlight : function(query, type) {
    Projects.deselectAll();
    var projectName = dc.app.SearchParser.extractProject(query);
    var project = projectName && Projects.find(projectName);
    if (project) return project.set({selected : true});
  }

});

