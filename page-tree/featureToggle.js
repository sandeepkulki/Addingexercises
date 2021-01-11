// returns the state of *all* features for current user
function fetchAllFeatures() {
        // in reality, this would have been a `fetch` call:
        // `fetch("/api/features/all")`
        return new Promise((resolve) => {
                const features = {
                        featureFoo: true,
                        featureBar: false,
                };

                setTimeout(resolve, 100, features);
        });
}

function getFeatureState(feature) {
        let enabled = getFeatureState(feature);
}




getFeatureState("featureFoo").then(function (isEnabled) {

        console.log(isEnabled);
});

getFeatureState("featureFoo");
