lib.languagemenu = HMENU
lib.languagemenu {


	special =language
	special.value = 0,1,2


	wrap = <div class="languagemenu">|</div>

	1 = TMENU
	1 {

		NO = 1
		NO.stdWrap.override = DE || EN || FR

		ACT < .NO
		ACT {

			allWrap = <span class="curlang">|</span>
			doNotLinkIt = 1
		}

		USERDEF1 < .NO
		USERDEF1 {

			#allWrap = <span class="no-translation">|</span>
			#doNotLinkIt = 1
			doNotShowLink = 1
		}
	}

}