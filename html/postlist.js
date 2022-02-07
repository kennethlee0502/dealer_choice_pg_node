//const html = require("html-template-tag");

module.exports = (posts) =>
  `<!DOCTYPE html>
    <html>
      <head>
        <title>Instagram</title>
        <link rel="stylesheet" href="/style.css" />
      </head>
      <body>
        <div>
        <nav class="navbar">
        <div class="nav-wrapper">
            <img src="logo.PNG" class="brand-img" alt="">
            <input type="text" class="search-box" placeholder="search">
            <div class="nav-items">
                <img src="home.PNG" class="icon" alt="">
                <img src="messenger.PNG" class="icon" alt="">
                <img src="add.PNG" class="icon" alt="">
                <img src="explore.PNG" class="icon" alt="">
                <img src="like.PNG" class="icon" alt="">
                <div class="icon user-profile"></div>
            </div>
        </div>
    </nav>
    <section class="main">
    <div class="wrapper">
        <div class="left-col">
            <div class="status-wrapper">
                <div class="status-card">
                    <div class="profile-pic"><a href="https://www.fullstackacademy.com/programs/coding-bootcamp
                    "> <img src="ice.jpg" alt=""></a>
                   </div>
                    <p class="username">ICEEEE</p>
                </div>
                <div class="status-card">
                <div class="profile-pic"><a href="https://www.fullstackacademy.com/programs/coding-bootcamp
                "> <img src="stanley.jpg" alt=""></a>
               </div>                    <p class="username">Grown_butt</p>
                </div>
                <div class="status-card">
                <div class="profile-pic"><a href="https://www.fullstackacademy.com/programs/coding-bootcamp
                "> <img src="janie.jpg" alt=""></a>
               </div>                    <p class="username">JANIE</p>
                </div>
                <div class="status-card">
                <div class="profile-pic"><a href="https://www.fullstackacademy.com/programs/coding-bootcamp
                "> <img src="jonathan.jpg" alt=""></a>
               </div>
                <p class="username">Jonathan</p>
            </div>
            <div class="status-card">
            <div class="profile-pic"><a href="https://www.fullstackacademy.com/programs/coding-bootcamp
            "> <img src="Claudia.jpg" alt=""></a>
           </div>
            <p class="username">Claudia</p>
        </div>
        <div class="status-card">
        
        <div class="profile-pic"><a href="https://www.fullstackacademy.com/programs/coding-bootcamp
        "> <img src="prof.jpg" alt=""></a>
       </div>        <p class="username">PROF</p>
    </div>
        </div>
    </div>
</section>

              ${posts
                .map(
                  (post) => `

                  <section class="main">
    <div class="wrapper">
        <div class="left-col">

            <div class="post">
                <div class="info">
                    <div class="user">
                        <div class="profile-pic"><a href="/${post.id}"><img src="/profile_${post.name}.jpg"></a></div>
                        <p class="username"><a href="/${post.id}">${post.title}</a></p>
                    </div>
                    <img src="option.PNG" class="options" alt="">
                </div>
                <img src="${post.name}.jpg" class="post-image" alt="">
                <div class="post-content">
                    <div class="reaction-wrapper">
                        <img src="like.PNG" class="icon" alt="">
                        <img src="comment.PNG" class="icon" alt="">
                        <img src="send.PNG" class="icon" alt="">
                        <img src="save.PNG" class="save icon" alt="">
                    </div>
                    <p class="likes">${post.likes} likes</p>
                    <p class="description"><span><a href="/${post.id}"> ${post.title}</a></span> ${post.content}</p>
                    <p class="post-time">2 minutes ago</p>
                </div>
                <div class="comment-wrapper">
                    <img src="smile.PNG" class="icon" alt="">
                    <input type="text" class="comment-box" placeholder="Add a comment">
                    <button class="comment-btn">post</button>
                </div>
            </div>
        </div>
    </div>
</section>
`
                )
                .join("")}
      
    </div>
</section>
      </body>
    </html>`;
