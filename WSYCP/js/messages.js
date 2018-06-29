db.collection("messages").get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            function doLoop(){
              $('.messagecontainer').append(
                "<div class='column is-4'>" +
                  "<div class='card'>" +
                  "<div class='content padded'>" +
                  "<h3>"
                    + doc.data().name +
                  "</h3>"  +
                  "<em>"
                    + doc.id +
                  "</em>" + "<hr>"  +
                  "<p>"
                    + doc.data().message +
                  "</p>" +
                  "<strong>"
                    + "From: " + doc.data().email + " at " + doc.data().time +
                  "</strong>" +
                  "</div>" +
                  "</div>" +
                "</div>"

            );
            }

            doLoop();

        //   setInterval(function() {
        //     doLoop();
        // }, 10000);
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
