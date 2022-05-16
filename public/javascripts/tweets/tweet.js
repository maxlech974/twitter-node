
window.addEventListener('DOMContentLoaded', function() {
    bindTweet(); 
})


function bindTweet() {
    const elements = document.querySelectorAll('.btn-danger');
    const tweetContainer = document.querySelector('#tweet-list-container');

    elements.forEach(e => {
        e.addEventListener('click', e => {
            const tweetId = e.target.getAttribute('tweetid');
            axios.delete('/tweets/'+tweetId)
                .then(response => {
                    tweetContainer.innerHTML = response.data;
                    bindTweet();
                })
                .catch(function(err){
                    console.log(err)
                })
        })
    })
}