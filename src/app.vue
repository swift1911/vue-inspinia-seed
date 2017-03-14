<template>
    <div id="app">
        <!-- Navigation -->
        <router-view name="navigation"></router-view>

        <div id="page-wrapper" class="gray-bg">

            <!-- Page wrapper -->

            <router-view name="topnavbar"></router-view>

            <!-- Main view  -->
            <router-view name="ibox_tools"></router-view>

            <!-- Footer -->
            <route-view name="footer"></route-view>

        </div>

    </div>
</template>

<script>


</script>
