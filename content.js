$('#next-btn').click(hideAllEnglishSentences);

function hideAllEnglishSentences() {
  var englishSentenceDivs = findAllEnglishSentenceDivs();
  englishSentenceDivs.each(function(index) {
    initializeEnglishSentence($(this));
  });
}

function findAllEnglishSentenceDivs() {
  return $('.context-sentence-group');
}

function initializeEnglishSentence(jQuerySentenceDiv) {
  addLinkToSentenceDiv(jQuerySentenceDiv);
  hideEnglishSentence(jQuerySentenceDiv);
  setLinkClickListener(jQuerySentenceDiv);
}

function addLinkToSentenceDiv(jQuerySentenceDiv) {
  jQuerySentenceDiv.find('a').remove();
  jQuerySentenceDiv.append('<a href="#">Show English</a>');
  jQuerySentenceDiv.prop('isEnglishHidden', true);
}

function setLinkClickListener(jQuerySentenceDiv) {
    jQuerySentenceDiv.find('a').click(function(e) {
      e.preventDefault();
      hideOrShowEnglishSentence(jQuerySentenceDiv);
    });
}

function hideOrShowEnglishSentence(jQuerySentenceDiv) {
  if(jQuerySentenceDiv.prop('isEnglishHidden')) {
    showEnglishSentence(jQuerySentenceDiv);
  } else {
    hideEnglishSentence(jQuerySentenceDiv);
  }
}

function showEnglishSentence(jQuerySentenceDiv) {
  jQuerySentenceDiv.children('p').eq(1).show();
  jQuerySentenceDiv.prop('isEnglishHidden', false);
  jQuerySentenceDiv.find('a').text('Hide English');
}

function hideEnglishSentence(jQuerySentenceDiv) {
  jQuerySentenceDiv.children('p').eq(1).hide();
  jQuerySentenceDiv.prop('isEnglishHidden', true);
  jQuerySentenceDiv.find('a').text('Show English');
}
