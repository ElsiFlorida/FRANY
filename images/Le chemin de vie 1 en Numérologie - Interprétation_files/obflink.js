document.addEventListener('DOMContentLoaded', function() {
  var links = document.querySelectorAll('[data-obflink-url]')
  for (var i = 0; i < links.length; i++) {
    links[i].style.cursor = 'pointer'
    links[i].addEventListener('click', goTo, false)
  }
})

var goTo = function(event) {
  var link = this.getAttribute('data-obflink-url')
  var target = this.getAttribute('data-obflink-target')
  var url = decodeURIComponent(window.atob(link))

  if ( '#' != url ) {
    if (event.ctrlKey || target == '_blank') {
      var newWindow = window.open(url, '_blank')
      newWindow.focus()
    } else {
      document.location.href = url
    }
  }
}
