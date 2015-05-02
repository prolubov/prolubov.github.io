$(function() {
  $('select').select2({dropdownCssClass: 'dropdown-inverse'});
  $(':radio').radiocheck();

  // jQuery UI Spinner
  $.widget('ui.customspinner', $.ui.spinner, {
    widgetEventPrefix: $.ui.spinner.prototype.widgetEventPrefix,
    _buttonHtml: function () { // Remove arrows on the buttons
      return '' +
      '<a class="ui-spinner-button ui-spinner-up ui-corner-tr">' +
        '<span class="ui-icon ' + this.options.icons.up + '"></span>' +
      '</a>' +
      '<a class="ui-spinner-button ui-spinner-down ui-corner-br">' +
        '<span class="ui-icon ' + this.options.icons.down + '"></span>' +
      '</a>';
    }
  });

  $('input[type=number]').customspinner({}).on('focus', function () {
    $(this).closest('.ui-spinner').addClass('focus');
  }).on('blur', function () {
    $(this).closest('.ui-spinner').removeClass('focus');
  }).attr('type', 'text');

})