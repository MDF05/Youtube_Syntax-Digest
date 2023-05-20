console.log(navigator)


function onSuccess(response) {
    console.log(response)
}

navigator.managed.getManagedConfiguration(["interactable","deviceType","theme"])
.then(onSuccess, function(error) { 
     console.log(error.name); // Will print "NotAllowedError");
});

navigator.managed.getManagedConfiguration(["interactable"])
 .then(function(result) {
     // result = { “interactable” : “false” }
     // Process the value of the key.
});