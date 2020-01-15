var clipboard = new Clipboard('#copy-button', {
    target: function() {
        return document.querySelector('#my_email_signature');
    }
});

clipboard.on('success', function(e) {
    console.log(e);
});

clipboard.on('error', function(e) {
    console.log(e);
});



var myApp = angular.module('myApp',['ngSanitize']);

myApp.controller('language_switch', function($scope) {

    $scope.emptyImage = {url: null};

    // added Ukraine
    $scope.langs = [{
        name: "en",
        title: "English"
    // },{
    //     name: "es",
    //     title: "Español"
    // },{
    //     name: "pt",
    //     title: "Português"
    // },{
    //     name: "ru",
    //     title: "Русский"
    }];
    $scope.lang = "en";
    var labels = {
        "en": {
            fullname: "Full Name",
            title: "Title",
            address: "Address",
            address2: "Address 2",
            phone: "phone",
            tieline: "Tie Line",
            mobile: "Mobile",
            email: "Email",
            copy_me_text: "Copy to Clipboard...",
            environment: "Please consider the environment before printing",
            logo_images: [{
                url: "img/SmileTrainLogo.png"
            }],
            logo: "img/SmileTrainLogo.png",
            instructions: "<p><strong>Instructions:</strong></p><ol><li>From Outlook, click on the <strong>File</strong> tab. </li><li>Select <strong>Options</strong>.</li><li>Click on <strong>Mail</strong>.</li><li>Click on the <strong>Signatures</strong> button.  </li><li>This will pop open a Signature Window.</li><li>To create a new signature, click on the <strong>New</strong> button.</li><li>You will be asked to type in a name for this signature such. Enter name for signature and click <strong>OK</strong>. </li><li>Paste into the Signature window to edit</li><li>Select the signature name to apply to <strong>New messages</strong></li><li>Select to apply it to <strong>Replies/Forwards</strong></li><li>Click <strong>Ok</strong></li><li>Your signature will now be appended to all New Messages and all Replies/Forwarded Messages.</li></ol>",
            intro_sentence: "Enter all the information below and you will then be able to copy and paste your personal Smile Train signature code."
        },
        "es": {
            fullname: "Nombre completo",
            title: "Título",
            address: "Dirección",
            address2: "Dirección 2",
            phone: "Teléfono",
            tieline: "Tie Line",
            mobile: "móvil",
            email: "Email",
            copy_me_text: "Copiar al portapapeles...",
            environment: "Por favor considere el medio ambiente antes de imprimir",
            logo_images: [{
                url: "img/SmileTrainLogo.png"
            }],
            logo: "img/SmileTrainLogo.png",
            instructions: "Translated Information in Spanish",
            intro_sentence: "Llene toda la información abajo y usted será capaz de copiar y pegar su firma personal de Smile Train."
        },
        "pt": {
            fullname: "Nome completo",
            title: "Título",
            address: "Endereço",
            address2: "Endereço 2",
            phone: "Telefone",
            tieline: "Tie Line",
            mobile: "Mobile",
            email: "Email",
            copy_me_text: "Copiar para Área de Transferência",
            environment: "Por favor, considere o meio ambiente antes de imprimir",
            logo_images: [{
                url: "img/SmileTrainLogo.png"
            }],
            logo: "img/SmileTrainLogo.png",
            instructions: "Translation in Portuguese",
            intro_sentence: "Preencha as informações necessárias e então clique no botão ‘Copiar para Área de Transferência’. Siga as instruções ao lado para salvar sua nova assinatura."
        },
        "ru": {
            fullname: "Фамилия, Имя",
            title: "Должность",
            address: "Адрес",
            address2: "Адрес 2",
            phone: "Телефон",
            tieline: "Tie Line",
            mobile: "Моб.телефон",
            email: "Email",
            copy_me_text: "Скопировать в буфер обмена...",
            environment: "Please consider the environment before printing",
            logo_images: [{
                url: "img/SmileTrainLogo.png"
            }],
            logo: "img/SmileTrainLogo.png",
            instructions: "Translation in Russian",
            intro_sentence: "Заполните все графы ниже, чтобы создать новую электронную подпись"
        }
    };
    // deals with label language
    $scope.switch_lang = function(callback){
        var lang = (callback !='') ? callback:"en";
        $scope.lang = lang;
        $.each(labels[lang], function(i,v){
            $scope["t_" + i] = v;
        });
    };
    // init the functions
    $scope.switch_lang('en');

    $scope.lang_isselected = function(x){
        return x.name == $scope.lang;
    }
});
