<template>
    <div class="navClass">
        <h2 class="buttonHeader">
            <RouterLink to="/profile">Profile</RouterLink>
        </h2>
        <h2 class="buttonHeader">
            <RouterLink to="/">Home</RouterLink>
        </h2>
        <h2 class="buttonHeader">
            <RouterLink to="/leaderboard">Leaderboard</RouterLink>
        </h2>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }

    .buttonHeader {
        display: inline;
    }

    .navClass {
        padding-right: 4rem;
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-between;
    }
}
</style>