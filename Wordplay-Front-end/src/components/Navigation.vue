<template>
    <div class="navClass">
        <h2 class="buttonHeader">
            <RouterLink to="/profile"><font-awesome-icon icon="fa-solid fa-user" /></RouterLink>
        </h2>
        <h2 name="challengesStyle" class="outerstyling">
            <RouterLink to="/" class="challengesStyle"><font-awesome-icon icon="fa-solid fa-question" /></RouterLink>
        </h2>
        <!-- <h2 name="challengesStyle"  class="challengesStyle">
            <RouterLink to="/" ><font-awesome-icon icon="fa-solid fa-question" /></RouterLink>
        </h2> -->
        <h2 class="buttonHeader">
            <RouterLink to="/leaderboard"><font-awesome-icon icon="fa-solid fa-list" /></RouterLink>
        </h2>
    </div>
</template>

<style scoped>
nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
}

.buttonHeader {
    display: inline-block;
}

.challengesStyle {
    display: inline-block;
    border-radius: 50%;
    height: 68px;
    padding: 0rem 2rem;
    padding-top: 1rem;
    background-color: #EBEBEB;
    overflow: visible; 
    top: -30%;
}
/* .challengesStyle {
    display: inline-block;
    border-radius: 50%;
    height: 68px;
    padding: 0rem 2rem;
    padding-top: 1rem;
    background-color: #EBEBEB;
    top: -75%;
} */

.outerstyling {
    display: inline-block;
    border-radius: 50%;
    height: 68px;
    padding: 0rem 0rem;
    padding-top: 1rem;
    background-color: #EBEBEB;
    top: -75%;
}

.navClass {
    padding-right: 4rem;
    padding-left: 3rem;
    height: 36px;
    width: 100%;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    background-color: #EBEBEB;
}
</style>