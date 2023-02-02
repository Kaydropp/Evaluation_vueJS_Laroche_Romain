// Votre code ici
// Laroche Romain

new Vue({
    el : '#app',
    data: {
        formTitle : "Inscription",
        exempleMDP : ["Au moins 8 caractères", "Au moins 1 caractère minuscule", "Au moins 1 chiffre","Au moins 1 caractère spécial"],
        userEmail : '',
        password:'',
        isActive: true
    },
    methods: {
        togglePwdView: function(){
            this.isActive = !this.isActive
            document.querySelector('#togglePwdView i').className = "fa fa-eye"
            document.getElementById('.userpwd').type = "text"

        },
        sendUserInfos: function(){
                console.log(
                    this.userEmail,
                    " ",
                    this.password,
                    " ",)
                    
        }
    },

})
