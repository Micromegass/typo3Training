
page = PAGE

page.meta {

	X-UA-Compatible = IE=edge
	X-UA-Compatible.httpEquivalent = 1

	viewport =  width=device-width, initial-scale=1, shrink-to-fit=no

	description.field= description
	description.ifEmpty = Das ist eine Beschreibung

	author.field = author
	author.ifEmpty = Axel Braunschweiger

	keywords.field = keywords
	keywords.ifEmpty = TYPO3

}


page.includeCSS {
	10 = EXT:videotraining/Resources/Public/Css/bootstrap-flex.min.css
	20 = EXT:videotraining/Resources/Public/Css/sm-core-css.css
	30 = EXT:videotraining/Resources/Public/Css/sm-simple.css
	40 = EXT:videotraining/Resources/Public/Css/smartmenu.css
	50 = EXT:videotraining/Resources/Public/Css/mystyles.css
	60 = EXT:videotraining/Resources/Public/Css/bootstrap-flex.css
}



page.includeJSFooterlibs {

	10 = http://code.jquery.com/jquery-3.1.1.min.js
	10.external = 1
	10.disableCompression = 1

}


page.includeJSFooter {

	10 = EXT:videotraining/Resources/Public/JavaScript/bootstrap.min.js
	10.disableCompression = 1

	20 = EXT:videotraining/Resources/Public/JavaScript/jquery.smartmenus.min.js
	20.disableCompression = 1

	30 =  EXT:videotraining/Resources/Public/JavaScript/custom.js
	}


page.10 = FLUIDTEMPLATE
page.10 {
	partialRootPath = EXT:videotraining/Resources/Private/Partials/
    layoutRootPath = EXT:videotraining/Resources/Private/Layouts/
	file = EXT:videotraining/Resources/Private/Templates/Default.html
}
