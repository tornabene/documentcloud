
(function(){window.JST=window.JST||{};window.JST['annotation']=DV._.template('<div class="DV-annotation <%= orderClass %> <%= accessClass %> <% if (owns_note) { %>DV-ownsAnnotation<% } %>" style="top:<%= top %>px;" id="DV-annotation-<%= id %>" data-id="<%= id %>">\n\n  <div class="DV-annotationTab" style="top:<%= tabTop %>px;">\n    <div class="DV-annotationClose DV-trigger">\n      <% if (access == \'exclusive\') { %>\n        <div class="DV-annotationDraftDot DV-editHidden"></div>\n      <% } %>\n    </div>\n  </div>\n\n  <div class="DV-annotationRegion" style="margin-left:<%= excerptMarginLeft - 4 %>px; height:<%= excerptHeight %>px; width:<%= excerptWidth - 1 %>px;">\n    <div class="<%= accessClass %>">\n      <div class="DV-annotationEdge DV-annotationEdgeTop"></div>\n      <div class="DV-annotationEdge DV-annotationEdgeRight"></div>\n      <div class="DV-annotationEdge DV-annotationEdgeBottom"></div>\n      <div class="DV-annotationEdge DV-annotationEdgeLeft"></div>\n      <div class="DV-annotationCorner DV-annotationCornerTopLeft"></div>\n      <div class="DV-annotationCorner DV-annotationCornerTopRight"></div>\n      <div class="DV-annotationCorner DV-annotationCornerBottomLeft"></div>\n      <div class="DV-annotationCorner DV-annotationCornerBottomRight"></div>\n    </div>\n    <div class="DV-annotationRegionExclusive"></div>\n  </div>\n\n\n  <div class="DV-annotationContent">\n\n    <div class="DV-annotationHeader DV-clearfix">\n      <div class="DV-pagination DV-editHidden">\n        <span class="DV-trigger DV-annotationPrevious" title="<%= DV.t(\'previous_note\') %>"><%= DV.t(\'previous\') %></span>\n        <span class="DV-trigger DV-annotationNext" title="<%= DV.t(\'next_note\') %>"><%= DV.t(\'next\') %></span>\n      </div>\n      <div class="DV-annotationGoto DV-editHidden"><div class="DV-trigger"><%= DV.t(\'pg\') %><%= pageNumber %></div></div>\n      <div class="DV-annotationTitle DV-editHidden"><%= title %></div>\n      <input class="DV-annotationTitleInput DV-editVisible" type="text" placeholder="<%= DV.t(\'annotation_title\') %>" value="<%= title.replace(/"/g, \'&quot;\') %>" />\n      <% if (access == \'exclusive\') { %>\n        <div class="DV-annotationDraftLabel DV-editHidden DV-interface"><%= DV.t(\'draft\') %></div>\n      <% } else if (access == \'private\') { %>\n        <div class="DV-privateLock DV-editHidden" title="<%= DV.t(\'private_note\',2) %>"></div>\n      <% } %>\n      <span class="DV-permalink DV-editHidden" title="<%= DV.t(\'link_to_note\') %>"></span>\n      <div class="DV-showEdit DV-editHidden <%= accessClass %>"></div>\n    </div>\n\n\n    <div class="DV-annotationExcerpt" style="height:<%= excerptHeight %>px;">\n      <div class="DV-annotationExcerptImageTop" style="height:<%= excerptHeight %>px; width:<%= excerptWidth %>px;left:<%= excerptMarginLeft - 1 %>px;">\n\n        <img class="DV-img" src="<%= image %>" style="left:<%= -(excerptMarginLeft + 1) %>px; top:-<%= imageTop %>px;" width="<%= imageWidth %>" />\n\n      </div>\n      <div class="DV-annotationExcerptImage" style="height:<%= excerptHeight %>px;">\n        <img class="DV-img" src="<%= image %>" style="top:-<%= imageTop %>px;" width="<%= imageWidth %>" />\n      </div>\n    </div>\n\n    <div class="DV-annotationBody DV-editHidden">\n      <%= text %>\n    </div>\n    <textarea class="DV-annotationTextArea DV-editVisible" style="width: <%= bWidth %>px;"><%= text %></textarea>\n\n    <div class="DV-annotationMeta <%= accessClass %>">\n      <% if (author) { %>\n        <div class="DV-annotationAuthor DV-interface DV-editHidden">\n          <%= DV.t(\'note_by\', author ) %><% if (author_organization) { %>, <i><%= author_organization %></i><% } %>\n        </div>\n      <% } %>\n      <% if (access == \'exclusive\') { %>\n        <div class="DV-annotationWarning DV-interface DV-editHidden">\n          <%= DV.t(\'draft_note_visible\') %>\n        </div>\n      <% } else if (access == \'private\') { %>\n        <div class="DV-annotationWarning DV-interface DV-editHidden">\n          <%= DV.t(\'private_note_visible\') %>\n        </div>\n      <% } %>\n      <div class="DV-annotationEditControls DV-editVisible">\n        <div class="DV-clearfix">\n          <div class="minibutton warn DV-deleteAnnotation float_left"><%= DV.t(\'delete\') %></div>\n          <div class="minibutton default DV-saveAnnotation float_right">\n            <% if (access == \'exclusive\') { %>\n              <%= DV.t(\'publish\') %>\n            <% } else { %>\n              <%= DV.t(\'save\') %>\n            <% } %>\n          </div>\n          <% if (access == \'public\' || access == \'exclusive\') { %>\n            <div class="minibutton DV-saveAnnotationDraft float_right"><%= DV.t(\'save_as_draft\') %></div>\n          <% } %>\n          <div class="minibutton DV-cancelEdit float_right"><%= DV.t(\'cancel\') %></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n');window.JST['annotationNav']=DV._.template('<div class="DV-annotationMarker" id="DV-annotationMarker-<%= id %>">\n  <span class="DV-trigger">\n    <span class="DV-navAnnotationTitle"><%= title %></span>&nbsp;<span class="DV-navPageNumber"><%= DV.t(\'pg\') %> <%= page %></span>\n  </span>\n</div>');window.JST['chapterNav']=DV._.template('<div id="DV-chapter-<%= id %>" class="DV-chapter <%= navigationExpanderClass %>">\n  <div class="DV-first">\n    <%= navigationExpander %>\n    <span class="DV-trigger">\n      <span class="DV-navChapterTitle"><%= title %></span>&nbsp;<span class="DV-navPageNumber"><%= DV.t(\'pg\') %>&nbsp;<%= pageNumber %></span>\n    </span>\n  </div>\n  <%= noteViews %>\n</div>');window.JST['descriptionContainer']=DV._.template('<% if (description) { %>\n  <div class="DV-description">\n    <div class="DV-descriptionHead">\n      <span class="DV-descriptionToggle DV-showDescription DV-trigger"><%= DV.t(\'toggle_description\') %></span>\n      <%= DV.t(\'description\') %>\n    </div>\n    <div class="DV-descriptionText"><%= description %></div>\n  </div>\n<% } %>\n');window.JST['footer']=DV._.template('<% if (!options.sidebar) { %>\n  <div class="DV-footer">\n    <div class="DV-fullscreenContainer"></div>\n    <div class="DV-navControlsContainer"></div>\n  </div>\n<% } %>');window.JST['fullscreenControl']=DV._.template('<div class="DV-fullscreen" title="<%= DV.t(\'view_fullscreen\') %>"></div>\n');window.JST['header']=DV._.template('<div class="DV-header">\n  <div class="DV-headerHat" class="DV-clearfix">\n    <div class="DV-branding">\n      <% if (story_url) { %>\n        <span class="DV-storyLink"><%= story_url %></span>\n      <% } %>\n    </div>\n    <div class="DV-title">\n      <%= title %>\n    </div>\n  </div>\n\n  <div class="DV-controls">\n    \n    <div class="DV-views">\n      <div class="DV-documentView"><span class="DV-trigger DV-selected"><%= DV.t(\'document\') %></span></div>\n      <div class="DV-thumbnailsView"><span class="DV-trigger"><%= DV.t(\'page\',2) %></span></div>\n      <div style="display:none;" class="DV-annotationView"><span class="DV-trigger"><%= DV.t(\'note\',1) %></span></div>\n      <div class="DV-textView"><span class="DV-trigger"><%= DV.t(\'text\') %></span></div>\n    </div>\n\n    <div class="DV-collapsibleControls">\n\n      <div class="DV-searchBox DV-clearfix">\n        <form action="#" method="get" class="DV-searchDocument">\n          <div class="DV-searchInputWrap">\n            <div class="DV-searchInput-cancel"></div>\n            <input class="DV-searchInput" type="text" autosave="DV-<%= id %>" results="10" placeholder="<%= DV.t(\'search\') %>" />\n          </div>\n        </form>\n      </div>\n      \n      <div class="DV-zoomControls">\n        <span class="DV-zoomLabel"><%= DV.t(\'zoom\') %></span>\n        <div class="DV-zoomBox"></div>\n      </div>\n      \n    </div>\n    \n  </div>\n\n</div>\n');window.JST['navControls']=DV._.template('<div class="DV-navControls DV-clearfix">\n  <span class="DV-trigger DV-previous">&laquo;</span>\n  <div class="DV-clearfix DV-pageNumberContainer">\n    <span class="DV-currentPagePrefix"><%= DV.t(\'page\') %></span>\n    <span class="DV-currentAnnotationPrefix"><%= DV.t(\'note\') %>&nbsp;</span>\n    <span class="DV-currentPage">1</span>\n    <span class="DV-currentPageSuffix"><%= DV.t(\'of\') %>&nbsp;\n      <span class="DV-totalPages"><%= totalPages %></span>\n      <span class="DV-totalAnnotations"><%= totalAnnotations %></span>                        \n    </span>\n  </div>\n  <span class="DV-trigger DV-next">&raquo;</span>\n</div>');window.JST['navigationExpander']=DV._.template('<span class="DV-trigger DV-expander"><%= DV.t(\'expand\') %></span>');window.JST['pageAnnotation']=DV._.template('<div class="DV-annotation DV-pageNote <%= orderClass %> <%= accessClass %> <% if (owns_note) { %>DV-ownsAnnotation<% } %>" style="top:<%= top %>px;" id="DV-annotation-<%= id %>" data-id="<%= id %>">\n  <div class="DV-annotationTab">\n    <div class="DV-annotationClose DV-trigger"><%= DV.t(\'pg\') %> <%= pageNumber %></div>\n  </div>\n\n  <div class="DV-annotationContent">\n    <!-- Header -->\n    <div class="DV-annotationHeader DV-clearfix">\n      <div class="DV-pagination DV-editHidden">\n        <span class="DV-trigger DV-annotationPrevious" title="<%= DV.t(\'previous_note\') %>"><%= DV.t(\'previous\') %></span>\n        <span class="DV-trigger DV-annotationNext" title="<%= DV.t(\'next_note\') %>"><%= DV.t(\'next\') %></span>\n      </div>\n      <div class="DV-annotationGoto DV-editHidden"><div class="DV-trigger"><%= DV.t(\'pg\') %><%= pageNumber %></div></div>\n      <div class="DV-annotationTitle DV-editHidden"><%= title %></div>\n      <input class="DV-annotationTitleInput DV-editVisible" type="text" placeholder="<%= DV.t(\'annotation_title\') %>" value="<%= title.replace(/"/g, \'&quot;\') %>" />\n      <% if (access == \'exclusive\') { %>\n        <div class="DV-annotationDraftLabel DV-editHidden DV-interface"><%= DV.t(\'draft\') %></div>\n      <% } else if (access == \'private\') { %>\n        <div class="DV-privateLock DV-editHidden" title="<%= DV.t(\'private_note\',2) %>"></div>\n      <% } %>\n      <span class="DV-permalink DV-editHidden" title="<%= DV.t(\'link_to_note\') %>"></span>\n      <div class="DV-showEdit DV-editHidden <%= accessClass %>"></div>\n    </div>\n\n    <div class="DV-annotationBody DV-editHidden">\n      <%= text %>\n    </div>\n    <textarea class="DV-annotationTextArea DV-editVisible" style="width: <%= bWidth %>px;"><%= text %></textarea>\n\n    <div class="DV-annotationMeta <%= accessClass %>">\n      <% if (author) { %>\n        <div class="DV-annotationAuthor DV-interface DV-editHidden">\n          <%= DV.t(\'note_by\', author ) %><% if (author_organization) { %>, <i><%= author_organization %></i><% } %>\n        </div>\n      <% } %>\n      <% if (access == \'exclusive\') { %>\n        <div class="DV-annotationWarning DV-interface DV-editHidden">\n          <%= DV.t(\'draft_note_visible\') %>\n        </div>\n      <% } else if (access == \'private\') { %>\n        <div class="DV-annotationWarning DV-interface DV-editHidden">\n          <%= DV.t(\'private_note_visible\') %>\n        </div>\n      <% } %>\n      <div class="DV-annotationEditControls DV-editVisible">\n        <div class="DV-clearfix">\n          <div class="minibutton warn DV-deleteAnnotation float_left"><%= DV.t(\'delete\') %></div>\n          <div class="minibutton default DV-saveAnnotation float_right">\n            <% if (access == \'exclusive\') { %>\n              <%= DV.t(\'publish\') %>\n            <% } else { %>\n              <%= DV.t(\'save\') %>\n            <% } %>\n          </div>\n          <% if (access == \'public\' || access == \'exclusive\') { %>\n            <div class="minibutton DV-saveAnnotationDraft float_right"><%= DV.t(\'save_as_draft\') %></div>\n          <% } %>\n          <div class="minibutton DV-cancelEdit float_right"><%= DV.t(\'cancel\') %></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n');window.JST['pages']=DV._.template('<div class="DV-set p<%= pageIndex %>" data-id="p<%= pageIndex %>" style="top:0;left:0px;height:893px;width:700px;">\n  <div class="DV-overlay"></div>\n  <div class="DV-pageNoteInsert" title="<%= DV.t(\'click_add_page_note\') %>">\n    <div class="DV-annotationTab">\n      <div class="DV-annotationClose"></div>\n    </div>\n    <div class="DV-annotationDivider"></div>\n  </div>\n  <div class="DV-pageMeta"><span class="DV-pageNumber"><%= DV.t(\'pg\') %> <%= pageNumber %></span></div>\n  <div class="DV-annotations"></div>\n  <div class="DV-page" style="height:863px;width:700px;">\n    <span class="DV-loading-top"><%= DV.t(\'loading\') %></span>\n    <span class="DV-loading-bottom"><%= DV.t(\'loading\') %></span>\n    <div class="DV-cover"></div>\n    <img class="DV-pageImage" <%= pageImageSource ? \'src="\' + pageImageSource + \'"\' : \'\' %> height="863" />\n  </div>\n</div>');window.JST['thumbnails']=DV._.template('<% for (; page <= endPage; page++) { %>\n  <% var url = imageUrl.replace(/\{page\}/, page) ; %>\n  <div class="DV-thumbnail" id="DV-thumbnail-<%= page %>" data-pageNumber="<%= page %>">\n    <div class="DV-overlay">\n      <div class=\'DV-caret\'></div>\n    </div>\n    <div class="DV-thumbnail-page">\n      <div class="DV-thumbnail-select">\n        <div class="DV-thumbnail-shadow"></div>\n        <img class="DV-thumbnail-image" data-src="<%= url %>" />\n      </div>\n      <div class="DV-pageNumber DV-pageMeta"><span class="DV-pageNumberText"><span class="DV-pageNumberTextUnderline"><%= DV.t(\'pg\') %> <%= page %></span></span></div>\n    </div>\n  </div>\n<% } %>\n');window.JST['unsupported']=DV._.template('<div class="DV-unsupported">\n  <div class="DV-intro">\n    <% if (viewer.schema.document.resources && viewer.schema.document.resources.pdf) { %>\n      <a href="<%= viewer.schema.document.resources.pdf %>"><%= DV.t(\'dl_as_pdf\') %></a>\n    <% } %>\n    <br />\n    <br />\n    <%= DV.t(\'must_upgrade\') %>\n  </div>\n  <div class="DV-browsers">\n    <div class="DV-browser">\n      <a href="http://www.google.com/chrome">\n        <div class="DV-image DV-chrome"> </div>Chrome\n      </a>\n    </div>\n    <div class="DV-browser">\n      <a href="http://www.apple.com/safari/download/">\n        <div class="DV-image DV-safari"> </div>Safari\n      </a>\n    </div>\n    <div class="DV-browser">\n      <a href="http://www.mozilla.com/en-US/firefox/firefox.html">\n        <div class="DV-image DV-firefox"> </div>Firefox\n      </a>\n    </div>\n    <br style="clear:both;" />\n  </div>\n  <div class="DV-after">\n    <%= DV.t(\'install_chrome_frame\', \'<br/><a href="http://www.google.com/chromeframe">\',\'</a>\') %>\n  </div>\n</div>\n');window.JST['viewer']=DV._.template('<!--[if lte IE 8]><div class="DV-docViewer DV-clearfix DV-viewDocument DV-ie <% if (autoZoom) { %>DV-autoZoom<% } %> <% if (mini) { %>DV-mini<% } %> <% if (!options.sidebar) { %>DV-hideSidebar<% } else { %>DV-hideFooter<% } %>"><![endif]-->\n<!--[if (!IE)|(gte IE 9)]><!--><div class="DV-docViewer DV-clearfix DV-viewDocument <% if (autoZoom) { %>DV-autoZoom<% } %> <% if (mini) { %>DV-mini<% } %> <% if (!options.sidebar) { %>DV-hideSidebar<% } else { %>DV-hideFooter<% } %>"><!-- <![endif]-->\n  \n  <div class="DV-docViewerWrapper">\n  \n    <%= header %>\n    <div class="DV-docViewer-Container">\n    \n      <div class="DV-searchBarWrapper">\n        <div class="DV-searchBar">\n          <span class="DV-trigger DV-closeSearch"><%= DV.t(\'CLOSE\') %></span>\n          <div class="DV-searchPagination DV-foundResult">\n            <div class="DV-searchResults">\n              <span class="DV-resultPrevious DV-trigger"><%= DV.t(\'previous\') %></span>\n              <span class="DV-currentSearchResult"></span>\n              <span class="DV-totalSearchResult"></span>\n              <span><% DV.t(\'for\') %> &ldquo;<span class="DV-searchQuery"></span>&rdquo;</span>\n              <span class="DV-resultNext DV-trigger"><%= DV.t(\'next\') %></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    \n      <div class="DV-pages <% if (!options.sidebar) { %>DV-hide-sidebar<% } %>">\n        <div class="DV-paper">\n          <div class="DV-thumbnails"></div>\n          <div class="DV-pageCollection">\n            <div class="DV-bar" style=""></div>\n            <div class="DV-allAnnotations">\n            </div>\n            <div class="DV-text">\n              <div class="DV-textSearch DV-clearfix">\n          \n              </div>\n              <div class="DV-textPage">\n                <span class="DV-textCurrentPage"></span>\n                <pre class="DV-textContents"></pre>\n              </div>\n            </div>\n            <%= pages %>\n          </div>\n        </div>\n      </div>\n    \n      <div width="265px" class="DV-sidebar <% if (!options.sidebar) { %>DV-hide<% } %>" style="display:none;">\n        <div class="DV-well">\n    \n          <div class="DV-sidebarSpacer"></div>\n          \n          <% if (options.sidebar) { %>\n            <div class="DV-navControlsContainer">\n            </div>\n          <% } %>\n              \n          <div class="DV-navigation">\n            <%= descriptionContainer %>\n            <div class="DV-contentsHeader"><%= DV.t(\'contents\') %></div>\n            <div class="DV-chaptersContainer">\n            </div>\n            <div class="DV-supplemental">\n              <% if (pdf_url) { %>\n                <div class="DV-pdfLink"><%= pdf_url %></div>\n              <% } %>\n              <% if (print_notes_url) { %>\n                <div class="DV-printNotesLink">\n                  <a target="_blank" href="<%= print_notes_url %>"><%= DV.t(\'print_notes\') %> &raquo;</a>\n                </div>\n              <% } %>\n              <div class="DV-storyLink" style="<%= story_url ? \'\' : \'display:none\' %>">\n                <a target="_blank" href="<%= story_url %>"><%= DV.t(\'related_article\') %> &raquo;</a>\n              </div>\n              <% if (contributors) { %>\n                <div class="DV-contributor"><%= DV.t(\'contributed_by\') %>: <%= contributors %></div>\n              <% } %>\n            </div>\n            <div class="DV-logo"><a class="DV-logoLink" href="http://www.documentcloud.org"></a></div>\n          </div>\n        </div>\n      </div>\n    </div>\n    \n    <%= footer %>\n    \n  </div>\n  \n  <div class="DV-printMessage">\n    <%= DV.t(\'print_document_help\') %>\n  </div>\n\n</div>\n');})();