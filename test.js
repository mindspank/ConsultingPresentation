define(["jquery"], function($) {
	return {
		initialProperties : {
			version : 1.0,
			qHyperCubeDef : {
				qDimensions : [],
				qMeasures : [],
				qInitialDataFetch : [{
					qWidth : 10,
					qHeight : 50
				}]
			}
		},
		definition : {
            // Properties Panel Definition
		},
		paint : function($element, layout) {
            // The Generic Object has now evaluated and is
            // now available as 'layout'
		}
	};
});