lib.search = RECORDS

plugin.tx_indexedsearch.view.partialRootPaths.100 = EXT:videotraining/Resources/Private/indexed_search/Partials/
plugin.tx_indexedsearch.settings {

	targetPid = 44
	rootPidList = {$rootID}
}


lib.search {
	tables = tt_content
	source = 39
	dontCheckPid = 1
}


[globalVar = TSFE:id=44]
	lib.search >
[global]