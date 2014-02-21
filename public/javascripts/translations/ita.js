window.I18n.load({
  namespace: 'WS',
  code: 'ita',
  nplurals: 2,
  pluralizer: function(n){
    return (n != 1) ? 1 : 0;
  },

  strings: {"draft":"Bozza","print_notes":"Stampe note","annotated_by":"Annotato da: %s","pg":"p.","finish":"Fine","next":"Avanti","save":"Salva","save_as_draft":"Salva in bozza","publish":"Pubblica","contributed_by":"Contributo di","reviewer":"Reviewer","search":"Ricerca","description":"Descrizione","delete":"Rimuovi","of":"di","cancel":"Cancella","private_note_visible":"Questa è una nota visibile solo da te.","draft_note_visible":"Questa nota è visibile solo a voi e collaboratori.","log_out":"Esci","edit_data":"Modifica Dati","private_note":"Nota Privata","page":["Pagina","Pagine"],"x_pages":["%d Pagina","%d Pagine"],"document":["Documento","Documenti"],"x_documents":["%d Documento","%d Documenti"],"organizations_documents":"Documenti appartenenti a %s","x_collaborators":["Un Collaboratore","%d Collaboratori"],"note":["Nota","Note"],"x_notes":["%d Nota","%d Note"],"help":"Help","home":"Home","show_all_x_pages":["Mostra singola pagina","Mostra tutte  %d pagine"],"removed_from_x_documents":["Rimuovi un documento da %s","Rimuovi %d documenti da %s"],"added_to_x_documents":["Aggiungi un documento in %s","Aggiungi %d documenti in %s"],"private_access_help":"Only people with explicit permission (via collaboration) have access.","private_to_organization_help":"Only the people in your organization have access. (No freelancers.)","public_access":"Accesso Publico","public_access_help":"Anyone on the internet can search for and view the document.","private_to":"Privato per %s","private_access":"Accesso Privato","document_tools":"Strumenti Documento","add_note_instructions":"Evidenziare una parte della pagina, oppure fare clic tra le pagine per creare una nota.","add_public_note":"Aggiungi una nota Pubblica","add_public_note_warn":"Note pubbliche sono visibili a tutti gli utenti che visualizzano questo documento.","add_private_note":"Aggiungi una nota Privata","add_private_note_warn":"Nessuno a parte te è mai permesso di visualizzare le note privati​​.","redact_document":"Redigere dei documenti","red":"rosso","title":"Title","black":"black","redact_instructions":"Fare clic e trascinare per disegnare un rettangolo di  %s su ogni parte del documento che vuoi redigere. Testo associato verrà rimosso quando si salvano le redazioni.","notes_hidden_while_redacting":"Eventuali note esistenti vengono temporaneamente nascosti mentre la redazione è in corso.","revoke":"Revoca","save_redactions":"Salva redazioni","redaction_close_while_processing":["You've redacted a passage. This document will close while it's being rebuilt. Are you sure you're ready to proceed?","You've redacted %d passages. This document will close while it's being rebuilt. Are you sure you're ready to proceed?"],"close_while_redacting":"The document is being redacted. It will close while processing.","edit_sections":"Modifica Sezione","edit_document_info":"Modifica Info Documento","edit_title":"Modifica Titolo","edit_source":"Modifica Sorgente","edit_description":"Modifica Descrizione","edit_access":"Modifica Livello di Accesso","access_level_edit_closing":"Modifica del livello di accesso avrà pochi istanti. Il documento si chiude mentre elabora.","document_access_updated":["Access updated for the document","Access updated for %d documents"],"close_while_text_reprocess":"The text is being processed. Please close this document.","force_ocr":"Forza OCR","text_reprocess_help":"Reprocess this document to take advantage of improvements to our text extraction tools.                                     \\ Choose \"Force OCR\" (optical character recognition) to ignore any embedded text information and use Tesseract before reprocessing. \\ The document will close while it's being rebuilt. Are you sure you want to proceed?","reprocess":"Riprocessa","choose_location_to_insert_pages":"Choose a location to insert pages.","edit_related_url":"Modifica Related Article URL","edit_published_url":"Modifica Published URL","embed_tools":"Strumenti embed","embed_document":"Embed questo Documento","embed_note":"Embed una Nota","page_tools":"Page Tools","insert_replace_pages":"Insert/Replace Pages","replace_page_x":"Replace page %d","replace_multiple_pages":"Replace pages between %d and %d","insert_first_page":"Insert before first page","insert_between_pages":"Insert between pages %d and %d","insert_last_page":"Insert after last page","insert_pages_instructions":"To insert new pages at a specific position within the document,                 \\ click in between the pages above. If you'd like to replace a specific page with \\ a new copy, cick on the page you'd like to remove.","insert_pages_message":"This document will close while it's being rebuilt.  Long documents may take a long time to rebuild.","insert_pages_shift_key":"Hold down the shift key to select multiple pages to replace \\ at once. When you're ready, click the \"Upload Pages\" button.","remove_pages":"Remove Pages","remove_pages_click":"Click on each page you want to remove from this document.","remove_pages_done":"When you're finished selecting pages, click the \"Remove Pages\" button.","remove_pages_input":["Remove Page","Remove %d Pages"],"remove_page_warning_message":["You've selected a page for removal. This document will close while it's being rebuilt. Are you sure you're ready to proceed?","You've selected %d pages for removal. This document will close while it's being rebuilt. Are you sure you're ready to proceed?"],"removing":"Removing...","pages_are_being_removed":"The pages are being removed. Please close this document.","cannot_remove_all":"You can't remove all the pages from this document.","reorder_pages":"Riordina Pagine","reorder_pages_instructions":"Drag and drop pages to change their position in the document.","reorder_pages_done":"When you're finished rearranging, click on the \"Save Page Order\" button to save your changes.","text_tools":"Text Tools","edit_page_text":"Modifica Testo della Pagina","edit_page_text_instructions":"Edit the text of any page: use the navigation arrows at the top to page through this document. Editing the text here will not alter the original PDF.","edit_page_text_done":"When you’re finished revising the text, click the “Save Text” button.","reprocess_text":"Reprocess Text","help_pages":"help pages","annotation":"annotation","modification":"modification","tools_help":"Our %s can help you get the most out of our %s and %s tools.","save_text":"Save Text","edit_text_any_page":"Edit the text of any page.","change_page_arrows":"Change pages with the arrows on the right.","select_pages_remove":"Select the pages you wish to remove.","save_page_order":"Save Page Order","reorder_hint":"Reorder pages by dragging and dropping.","upload_pages":"Upload Pages","annotation_help":"Use the links at the right to annotate the document. Keep in mind      \\ that any other reviewers will be able to see public annotations and drafts. Private   \\ annotations are for your own reference. Even %s can't see them.","contact_reviewer":"Contact %s at %s if you need any help, or visit %s for more information about DocumentCloud.","in_project":"in this project","x_public_documents":["%d Documento Publico","%d Documenti Publici"],"x_private_documents":["%d Documento Privato","%d Documenti Privati"],"matching_search":"matching this search","set_will_appear":"will appear in this set.","no_appear_until_publish":"will not appear until published.","future_documents_w_appear":"Future documents %s will appear in your embed.","added_project":"added to this project","optional":"Optional","order_documents_by":"Order documents by","relevance":"Relevance","date_uploaded":"Data Upload","length":"Lunghezza","documents_per_page":"Documenti per pagina","allow_readers_to_search":"Allow readers to search this set of documents","preview_search_embed_help":"Before continuing, please take a moment to %spreview the document set%s Published documents will open at the URL where they were originally published, while other public documents will open on DocumentCloud.","project_id":"Progetto ID: %s","edit_x":"Modifica %s","collaborators":"Collaboratori","add_a_collaborator":"Aggiungi Collaboratori a questo progetto","remove":"Rimuovi","add":"Aggiungi","enter_email_address":"Inserisci indirizzo email","project_owner":"Progetto Owner","pending":"Pendente","manage":"Manage","organization":"Organizations","account":"Profilo","accounts":"Profili","email":"Email Addresses","first_name":"Nome","last_name":"Cognome","disabled":"Disabilitato","administrator":"Amministratore","contributor":"Contributor","freelancer":"Freelancer","change_password":"Cambia password","resend_welcome_email":"Reinvia Email di benvenuto","ok":"OK","reenable":"Re-enable","disable":"Disable","workspace":"Workspace","reader_workspace_language":"Reader/Workspace Language","default_document_language":"Default Document Language","role_administrator_for_x":"You are an administrator for %s","role_contributor_for_x":"You are a contributor for %s","role_reviewer_for_x":"You are a reviewer for %s","role_freelancer_for_x":"You are a freelancer for %s","language_defaults":"Language Defaults","resend_instructions":"Resend Instructions","no_reviewer_on_document":["There are no reviewers on this document.","There are no reviewers on these documents."],"include_optional_msg":"Optional: Include a personal message","preview_email":"preview the email message","before_continue":"Before continuing, you can take a moment to %s","add_reviewer":"Add Reviewer","reviewer_name":"Please provide the reviewer's name","reviewer_add_permission_denied":"You are not allowed to add reviewers.","reviewer_enter_email":"Enter the email address of the first reviewer to invite:","x_is_no_longer_a_reviewer_on_x":["%2$s is no longer a reviewer on the Document","%2$s is no longer a reviewer on the %1$d Documents"],"reviewer_remove_permission_denied":"You are not allowed to remove reviewers.","reviewer_remove_error":"There was a problem removing the reviewer.","reviewer_email_message":"DocumentCloud will email reviewing instructions to %s If you wish, you may add a personal message.","sending":"Sending...","please_enter_email":"Please enter an email address.","please_enter_valid_email":"Please enter a valid email address.","reviewing_instructions_single_sent_to":"Instructions for reviewing %s sent to %s","reviewing_instructions_multiple_sent_to":"Instructions for reviewing %d Documents sent to %s","reviewing_instructions_send_failure":"Your instructions were not sent. Contact support for help troubleshooting.","share_x_documents":["Share this Document","Share these Documents"],"reviewer_email_instructions":["Email Instructions to %2$s","Email Instructions to %d Reviewers"],"contact_us":"Contact Us","form_contact_instructions":"Use this form (or email to %s) to contact us for assistance. If you need to speak to someone immediately, you can call us at (202) 505-1010. See %s for more ways to get in touch.","message":"Message","send":"Send","new_account":"New Account","enter_new_password":"Enter your new password","password_updated":"Password updated","password_no_blank":"Your password can't be blank","welcome_message_sent_to":"A welcome message has been sent to %s.","already_has_account":"%s alread has an account.","account_is_disabled":"%s has been disabled.","double_check_disable":"Really disable %s's account?","explain_disable_account":"%1$s will not be able to log in to DocumentCloud. Public documents and annotations provided by %1$s will remain available. %2$sContact support%3$s to completely purge %1$s's account.","signup_sent_to":"Signup sent to %s","account_add_failure":"Could not add the account.","saved":"Saved","enter_title_and_page":"Please add a title and page number for each section.","no_duplicate_section":"Can't create a duplicate section.","no_section_outside_doc":"Can't create a section outside the document.","remove_all":"Remove All","edit_document_pairs":["Modifica coppie chiave/valore che descrivono questo documento.","Modifica coppie chiave/valore che descrivono tali documenti."],"or_remove_all_data":"o %s rimuovi tutti i dati %s.","for_example_data":"Per esempio: \u0026ldquo;birth: 1935-01-08\u0026rdquo;, or \u0026ldquo;status: released\u0026rdquo;","edit_data_for":"Modifica Dati per %s","bad_data_key":"%s non puo essere usata una chiave","confirm_remove_all_data":"Sei sicuro di voler rimuovere tutti i dati da %s?","title_of_document":"Title of this document","source_of_document":"The source from which you obtained this document","paragraph_description_of_document":"Paragraph description of this document","related_url_of_document":"URL of the web article that refers to this document","embed_url_of_document":"Most users won't need to add this. URL of the page on your site where this document is embedded","remove_line_breaks":"Remove line breaks","add_html_for_viewer":"Add this HTML to your site to create a document viewer.","add_html_for_note":"Add this HTML to your site to embed the note.","featured_examples_list":"You can find plenty of examples of embedded documents on our list of %sfeatured reporting%s.","mentioning_query":"mentioning \u0026ldquo;%s\u0026rdquo;","document_has_no_public_notes":"This document has no public notes.","enter_url_that_references":["Enter the URL of the article that references this document","Enter the URL of the article that references these documents"],"related_article_url_help":"Providing the URL of the article that references this document will enable a \"Related Article\" link within the document viewer. Many readers arrive at a document from a web search \u0026mdash; the link guides them back to the document's original context.","embed_show_sidebar":"Show the sidebar","document_viewer_size":"Document viewer size","demo_embed_error":"Demo accounts are not allowed to embed documents. %sContact us%s if you need a full featured account. View an example of the embed code %shere%s.","embed_show_sidebar_help":"If your layout has limited horizontal space, uncheck this box to hide the sidebar.","embed_show_text_tab":"Show the text tab","embed_hide_text_tab_help":"If the quality of the document's text is poor, uncheck this box to hide the text tab.","document_already_public":"This document is already public.","document_public_on":"This document will be public on %s","make_document_public":"Make document public","document_publish_public_help":"This document is public. It is currently available to users who search DocumentCloud's catalog and will be visible to the public when you embed it on your website. Change the %saccess level%s.","document_publish_private_help":"This document is private. It will not be visible to your readers until you make it public. Change the %saccess level%s now or %s publication date","set_the":"set the","document_publish_embed_test":"If you want to test the embed before publication, make sure to edit the embed code to use secure HTTPS URLs, and then switch back to regular HTTP before making the document public.","full_page":"Full Page","width":"Width","height":"Height","publish_choose_display":"Choose whether to display your document in a %sfull page layout%s or a %sfixed size box%s.","embed_viewer_opens_to":"Viewer opens to","first_page":"First Page","page_ellipsis":"Page ...","note_ellipsis":"Note ...","embed_viewer_opens_to_help":"Tell the viewer to open directly to a specific page or annotation.","link_to_pdf":"Link to the original PDF","link_to_pdf_help":"Uncheck this box to remove the PDF link from the document viewer.","preview_viewer":"Before continuing, please take a moment to %spreview the document viewer%s.","back":"Back","close":"Close","step_x_of_x":"Step %d di %d","embed_step_one_title":"Step One: Review \"%s\"","embed_step_two_title":"Step Two: Configure the Document Viewer","embed_step_three_title":"Step Three: Copy and Paste the Embed Code","open_in_viewer":"Open all pages in viewer","or":"or","true":true,"over_x_mentions":"Over %d mentions","x_mentions":["One Mention","%d Mentions"],"private_documents_visible_instructions":["This document is private.  You must make it public before it will be visible on   \\ your website or in searches of DocumentCloud's catalog. You can choose to make it \\ public at a future date or you can %2$schange it now%3$s.","These documents are private.  You must make them public before they will be visible \\ on your website or in searches of DocumentCloud's catalog. You can choose to make  \\ them public at a future date or you can %2$schange them now%3$s."],"set_publication_date_for":"Set publication date for %s","no_past_publication":"You can't set a document to be published in the past.","make_public_on":"Make public on","at":"at","public_on":"Public on","view_pages":"View Pages","edit_document_information":"Modifica Documento Info","set_access":"Set Access Level","remove_from_project":"Remove from this Project","open_published_version":"Open Published Version","new_documents":"Nuovo Documento","email_when_complete":"Email me when %sdocuments have%s finished processing.","make_documents_public":"Make %sdocuments%s public.","remove_file":"Remove file","edit_details":"edit details","apply_all_files":"apply to all files","apply_fields_all_files":"apply this description, source, and access level to all files","language":"language","shared_with_you_by":"Shared with you by %s","must_have_doc_title":["Please enter a title for the document","Please enter a title for all documents."],"update_applied_all":"Update applied to all files.","uploaded_x_documents":["Uploaded one Document","Uploaded %d Documents"],"uploaded_x_document_has":["The uploaded document has","The %d uploaded documents have"],"document_error_message":"Our system was unable to process this document. We've been notified of the problem and periodically review these errors. Please review our %stroubleshooting suggestions%s or %scontact us%s for immediate assistance.  ","upload":"Upload","upload_document":"Upload Document","max_upload_size_warn":"You can only upload documents less than 200MB in size. Please %soptimize your document%s before continuing.","must_upload_something":"You must upload at least one document.","document_processing_count":["There is one documents being processed","There are %d documents being processed"],"print_notes_missing_error":"%s does not contain any printable notes.","no_projects_help":"This account doesn't have any projects yet. To start one, click on the \"New Project\" button above.","public_documents_help":"Select a contributing organization in the list above to view their public documents.","add_html_for_documents":"Add this HTML to your site to embed these documents.","embed_search_step_one":"Step One: Configure the Embedded Documents","embed_search_step_two":"Step Two: Copy and Paste the Embed Code","embed_search_demo_error":"Demo accounts are not allowed to embed document sets. %sContact us%s if you need a full featured account. View an example of the embed code %shere%s.","featured_reporting_list":"You can find examples of embedded searches on our list of %sfeatured reporting%s.","mentioned_in_x_documents":["Mentioned in a document","Mentioned in %d documents"],"show_pages":"show pages","remove_entity":"remove this entity from your search","show_more":"Show more","show_less":"Show less","no_entities_found":"No entities were found that match your search.","show_all":"Show all","entities_explained":"The entities listed above are present within the documents that match your search. Select an entity to filter your search results.","calais_credit":"Entities provided by OpenCalais","city":"City","country":"Countries","date":"Dates","phone":"Phone","person":"People","place":"Places","state":"States","term":"Terms","note_embed_private":"This document is private: notes on this document will not be visible to the public until the document is public.  Change the %saccess level%s now or","publication_date":"publication date","choose_note":"Choose note","select_with_public_note":"Please select a document with at least one public note.","embed_note_step_one":"Step One: Select a Note to Embed","embed_note_step_two":"Step Two: Copy and Paste the Embed Code","embed_note_demo_error":"Demo accounts are not allowed to embed notes. %sContact us%s if you need a full featured account. View an example of the embed code %shere%s.","terms":"Terms","privacy":"Privacy","guides_howtos":"Guides \u0026amp Howto's","uservoice_discuss":"Discuss Features \u0026amp; Bugs","contact_documentcloud":"Contact DocumentCloud","introduction":"Introduction","guided_tour":"Guided Tour","adding_accounts":"Adding Accounts","searching_dd":"Searching Documents and Data","uploading_documents":"Uploading Documents","troubleshooting_uploads":"Troubleshooting Failed Uploads","document_modification":"Document Modification","editing_notes_sections":"Editing Notes and Sections","collaboration":"Collaboration","publishing_embedding":"Publishing \u0026amp; Embedding","the_api":"The DocumentCloud API","entities_unavailable":"Entities are temporarily unavailable.","email_for_assistance":"If you need assistance, please email us at support@documentcloud.org.","sort_documents_by":"Ordina Documenti per","by_relevance":"per rilevanza","by_title":"per titolo","by_date":"per data","by_source":"per sorgente","by_length":"per lunghezza","documents":"Documento","all_documents":"Tutti Documenti","your_documents":"Tuoi Documenti","annotated_documents":"Documenti Annotati","popular_documents":"Documenti popolari","published_documents":"Documenti Pubblicati","your_published_documents":"Tuoi Documenti Pubblicati","not_found_project":"This project does not contain any documents.","not_found_account":"This account does not have any documents.","not_found_group":"This organization does not have any documents.","not_found_published":"This organization does not have any documents.","not_found_annotated":"There are no annotated documents.","not_found_search":"Your search did not match any documents.","not_found_all":"There are no documents","open":"Apri","edit":"Modifica","sort":"Ordina","projects":"Progetti","analyze":"Analizza","select_single_to_open":"Please select a document to open.","source":"Source","access_level":"Access Level","related_article_url":"Related article URL","published_url":"Published URL","enter_url_for_embed":["Enter the URL at which this document is embedded","Enter the URL at which these documents are embedded"],"edit_document_data":"Modifica dati Documento","modify_original_document":"Modify Original Document","delete_documents":["Delete Document","Delete Documents"],"really_delete_x_docs":["Really delete document?","Really delete %d documents?"],"sort_by_relevance":"Sort by Relevance","sort_by_date_uploaded":"Sort by Date Uploaded","sort_by_title":"Sort by Title","sort_by_source":"Sort by Source","sort_by_length":"Sort by Length","new_project":"Nuovo Progetto","view_entities":"View Entities","has_no_entities":"%s has no entities to display.","view_timeline":"View Timeline","timeline_zoom_in":"Drag a range of dates to zoom in.","timeline_for_doc":"Timeline for \"%s\"","timeline_for_x_docs":"Timeline for %d documents","zoom_out":"Zoom Out","timeline_max_documents":"You can only view a timeline for ten documents at a time.","timeline_must_select":"In order to view a timeline, please select some documents.","analyze_project_in_overview":"Analyze this Project in Overview","export_to_overview_explain":"You are about to export to Overview. You must create an Overview account, and you must provide Overview with your DocumentCloud username and password.","share_documents":"Share these Documents","share_project":"Share this Project","analyze_x_docs_in_overview":["Analyze this Document in Overview","Analyze these Documents in Overview"],"export":"Export","no_project_doc_selected":"No project or documents selected","embed_document_viewer":"Embed Document Viewer","demo_no_viewer":"Demo accounts are not allowed to download viewers. %s if you need a full featured account.","select_single_to_embed":"Please select a single document in order to create the embed.","embed_document_list":"Embed Document List","embed_a_note":"Embed una Nota","set_publication_date":"Set publication Date","download_viewer":"Download Document Viewer","x_is_not_published":"\"%s\" is not published.","no_permission_to_edit_x":"You don't have permission to edit \"%s\".","x_still_processing":"\"%s\" is still being processed. Please wait for it to finish.","no_embed_permission":"You don\\'t have permission to embed that document.","downloading_progress":["Preparing \"%2$s\" for download...","Preparing %d documents for download"],"download_pdf":"Download Original PDF","download_text":"Download Full Text","create_new_project":"Create a New Project","project_exists":"A project named %s already exists","must_have_title":"Please enter a title.","uploading":"Uploading","broken_document":"Broken document","your_organization":"Your Organization","private":"Private","open_published":"Open Published Version","manage_organization":"Manage Organization %s","manage_account":"Manage Account","x_invited_to_review_x":"%s has invited you to review %s"}

});
