module.exports = (post) => `

<!DOCTYPE html>
<title> Instagram ${post.name}</title>

<header>
<link rel="stylesheet" href="/style1.css" />
<nav class="navbar">
<div class="nav-wrapper">
    <a href="/"><img src="logo.PNG" class="brand-img" alt=""></a>
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
	<div class="container">

		<div class="profile">

			<div class="profile-image">

            <a href="/"><img src="profile_${post.name}.jpg" alt=""></a>

			</div>

			<div class="profile-user-settings">

				<h1 class="profile-user-name">${post.title}</h1>

				<button class="btn profile-edit-btn">Message</button>

				<button class="btn profile-settings-btn" aria-label="profile settings"><i class="fas fa-cog" aria-hidden="true"></i></button>

			</div>

			<div class="profile-stats">

				<ul>
					<li><span class="profile-stat-count">${post.number_of_post}</span> posts</li>
					<li><span class="profile-stat-count">${post.number_of_followrs}m</span> followers</li>
					<li><span class="profile-stat-count">0</span> following</li>
				</ul>

			</div>

			<div class="profile-bio">

				<p><span class="profile-real-name">${post.name}</span></p>
                <p>${post.description}</p>

			</div>

		</div>
		<!-- End of profile section -->

	</div>
	<!-- End of container -->

</header>

<main>

	<div class="container">

		<div class="gallery">

			<div class="gallery-item" tabindex="0">

             <img src="/${post.name}.jpg" class="gallery-image">

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i>❤ 6.3m</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

				<img src="/${post.name}1.jpg" class="gallery-image" alt="">

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> ❤ 8.9m</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

            <img src="/${post.name}2.jpg" class="gallery-image" alt="">

				<div class="gallery-item-type">

					<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> ❤ 4.2m</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

            <img src="/${post.name}3.jpg" class="gallery-image" alt="">

				<div class="gallery-item-type">

					<span class="visually-hidden">Video</span><i class="fas fa-video" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> ❤ 3.8</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

            <img src="/${post.name}4.jpg" class="gallery-image" alt="">

				<div class="gallery-item-type">

					<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> ❤ 4.7m</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

            <img src="/${post.name}5.jpg" class="gallery-image" alt="">

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> ❤ 9.4m</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

            <img src="/${post.name}6.jpg" class="gallery-image" alt="">

				<div class="gallery-item-type">

					<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> ❤ 5.2m</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

            <img src="/${post.name}7.jpg" class="gallery-image" alt="">

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> ❤ 6.6m</li>
					</ul>

				</div>

			</div>

			<div class="gallery-item" tabindex="0">

            <img src="/${post.name}8.jpg" class="gallery-image" alt="">

				<div class="gallery-item-type">

					<span class="visually-hidden">Gallery</span><i class="fas fa-clone" aria-hidden="true"></i>

				</div>

				<div class="gallery-item-info">

					<ul>
						<li class="gallery-item-likes"><span class="visually-hidden">Likes:</span><i class="fas fa-heart" aria-hidden="true"></i> ❤ 4.5m</li>
					</ul>

				</div>

			</div>

			
		</div>

		<div class="loader"></div>

	</div>

</main>
</html>

`;
