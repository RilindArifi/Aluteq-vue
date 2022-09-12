<template>
            <!-- Topbar -->
        <section id="topbar">
        <nav class="navbar navbar-expand-lg fixed-top">
            <div class="container">
            <router-link class="navbar-brand" to="/" ><img src="/assets/images/logo.png" alt=""  data-aos="flip-left"></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse " id="navbarSupportedContent">
                <ul class="navbar-nav mb-2 mb-lg-0">
                <li class="nav-item start entrances">
                    <router-link to="/" class="nav-link active" aria-current="page" >Home</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/entrances" class="nav-link " aria-current="page">Entrances</router-link>
                </li>
                <li class="nav-item end">
                    <router-link to="/decorative_panels" class="nav-link " aria-current="page" >Decorative Panels</router-link>
                </li>
                <li class="nav-item end">
                    <a href="#aboutus" class="nav-link" aria-current="page" >About</a>
                </li>
                <li class="nav-item button">
                    <router-link to="/contactus" class="nav-link text-white" aria-current="page">Contact Us</router-link>
                </li>
                
                </ul>
            </div>
            </div>
        </nav>
        </section>
        <!-- endtopbar -->

        <router-view />

        <!-- Footer -->

        <section id="footer">
            <div class="container text-white" data-aos="fade-up">
                <div class="row">
                    <div class="col-sm-12 col-md-9 col-lg-6 col-xl-3">
                        <img src="/assets/images/logowhite.png" alt="">
                        <p>C 2021-2022</p>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-6 col-xl-3">
                        <h3>Term & policies</h3>
                        <p>Terms of Service</p>
                        <p>Medium Rules</p>
                        <p>Privacy Policy</p>
                        <p>Partner Program Terms</p>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-6 col-xl-3 d-block">
                        <h3>Company</h3>
                        <p><a href="#aboutus">About</a></p>
                        <p><a href="">Our Timeline</a></p>
                        <p><a href="">Contact</a></p>
                        <p><a href="">Coreers</a></p>
                    </div>
                    <div class="col-sm-12 col-md-9 col-lg-6 col-xl-3">
                        <h3>Office</h3>
                        <p>Parku Industrial , Drenas</p>
                        <p>Alutech-ks@hotmail.com</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- endFooter -->
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>