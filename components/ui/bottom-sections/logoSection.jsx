export default function LogoSection() {

    const logos = [
        'https://images.ctfassets.net/q5ulk4bp65r7/3TBS4oVkD1ghowTqVQJlqj/2dfd4ea3b623a7c0d8deb2ff445dee9e/Consumer_Wordmark.svg',
        'https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green-300x82.png',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx58BFE_jEM8OF_V6ytEA0PvbUIKZNuSAtug&s',
        'https://seeklogo.com/images/D/dropbox-flat-logo-52D9AEFEAE-seeklogo.com.png',
        'https://images.seeklogo.com/logo-png/49/1/webflow-logo-png_seeklogo-492860.png?v=1957919840258497184',
        'https://images.seeklogo.com/logo-png/30/1/zoom-logo-png_seeklogo-306629.png?v=1957908463439810488'
    
    ]
    return(
        <div className="flex flex-wrap  md:gap-12 items-center justify-center">
            {logos.map((logo,index)=><img key={index} src={logo} alt="logo" className="w-32 h-32 object-contain mx-8" />)}

        </div>
    )
}