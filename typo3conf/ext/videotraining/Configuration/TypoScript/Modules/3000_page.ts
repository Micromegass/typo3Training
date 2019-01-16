config.contentObjectExceptionHandler = 0

page = PAGE

## Meta-Tags im <head>
page.meta {
	X-UA-Compatible = IE=edge
	X-UA-Compatible.httpEquivalent = 1

	viewport = width=device-width, initial-scale=1, shrink-to-fit=no

	description.field = description
	description.ifEmpty = Das ist die Standard-Description

	author.field = author
	author.ifEmpty = Max Mustermann

	keywords.field = keywords
	keywords.ifEmpty = defaultkeyword1,defaultkeyword2,defaultkeyword3
}

## Favicon eininden
page.shortcutIcon = EXT:videotraining/Resources/Public/Icons/favicon.ico

## CSS einbinden
page.includeCSS {
	10 = EXT:videotraining/Resources/Public/Css/bootstrap-flex.min.css
	20 = EXT:videotraining/Resources/Public/Css/sm-core-css.css
	30 = EXT:videotraining/Resources/Public/Css/sm-simple.css
	40 = EXT:videotraining/Resources/Public/Css/smartmenu.css
	50 = EXT:videotraining/Resources/Public/Css/mystyles.css
}

## JavaScript einbinden

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

	30 = EXT:videotraining/Resources/Public/JavaScript/custom.js
}

page.10 = FLUIDTEMPLATE
page.10 {
	layoutRootPath = EXT:videotraining/Resources/Private/Layouts/
	partialRootPath = EXT:videotraining/Resources/Private/Partials/

	file = EXT:videotraining/Resources/Private/Templates/Default.html

	variables {

		content0 = CONTENT
		content0 {

			table = tt_content
			select.where = colPos = 0
			select.orderBy = sorting

		}



		content1 < .content0
		content1.select.where = colPos = 1

		content2 < .content0
		content2.select.where = colPos = 2

		content3 < .content0
		content3.select.where = colPos = 3

		content4 < .content0
		content4.select.where = colPos = 4

		content5 < .content0
		content5.select.where = colPos = 5





		backendlayout = CASE
		backendlayout {
			key.data = pagelayout

			pagets__jumbotron = TEXT
			pagets__jumbotron.value = jumbotron

			pagets__2spalten = TEXT
			pagets__2spalten.value = 2spalten

			pagets__1spalte = TEXT
			pagets__1spalte.value = 1spalte

			default < .pagets__2spalten
		}


		siteTitle = TEXT
				siteTitle {
					value = {$siteTitle}
					stdWrap.typolink.parameter = t3://page?uid={$rootID}
					stdWrap.typolink.title = {$siteTitle} - zur Startseite
					wrap = <h2 class="nav-brand">|</h2>
		}


	}

}