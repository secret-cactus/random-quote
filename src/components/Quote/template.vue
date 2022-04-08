<template>
    <div class="quote">
        <p>{{ isLoading ? "Loading..." : quote }}</p>
        <h4>{{ author }}</h4>
        <h5>{{ category }}</h5>
    </div>
</template>

<style src="@/components/Quote/style.css" lang="css" scoped></style>
<script src="@/components/Quote/component.js" lang="js"></script>