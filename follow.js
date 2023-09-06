function calc_result_follow(){

    const all_values2 = document.querySelectorAll('.follow-calc input');
    //============== inputs dos campos dos alimentos ========================
    let input_lentilha = 0; //apenas para teste
    let input_mix_de_legumes = 0; //apenas para teste
    let input_arroz_integral = 0; //apenas para teste
    let input_arroz_integral_colorido = 0; //apenas para teste
    let input_arroz_branco = 0; //apenas para teste
    let input_escondidinho_de_aipim = 0; //apenas para teste
    let input_feijao = 0; //apenas para teste
    let input_batata_doce_rustica = 0; //apenas para teste
    let input_pure_de_abobora_cabotia = 0; //apenas para teste
    let input_pure_de_batata_inglesa = 0; //apenas para teste
    let input_pure_de_batata_salsa = 0; //apenas para teste
    let input_pure_de_batata_doce = 0; //apenas para teste
    let input_macarrao_integral = 0; //apenas para teste
    let input_macarrao_de_arroz = 0; //apenas para teste
    //let input_nhoque_de_batata_doce = 0; //apenas para teste
    let input_grao_de_bico = 0; //apenas para teste
    let input_macarrao_tradicional = 0; //apenas para teste
    //============== inputs dos campos dos alimentos ========================

    //============== inputs dos campos dos alimentos ========================
    input_lentilha = all_values2[0].value; //apenas para teste
    input_mix_de_legumes = all_values2[1].value; //apenas para teste
    input_arroz_integral = all_values2[2].value; //apenas para teste
    input_arroz_integral_colorido = all_values2[3].value; //apenas para teste
    input_arroz_branco = all_values2[4].value; //apenas para teste
    input_escondidinho_de_aipim = all_values2[5].value; //apenas para teste
    input_feijao = all_values2[6].value; //apenas para teste
    input_batata_doce_rustica = all_values2[7].value; //apenas para teste
    input_pure_de_abobora_cabotia = all_values2[8].value; //apenas para teste
    input_pure_de_batata_inglesa = all_values2[9].value; //apenas para teste
    input_pure_de_batata_salsa = all_values2[10].value; //apenas para teste
    input_pure_de_batata_doce = all_values2[11].value; //apenas para teste
    input_macarrao_integral = all_values2[12].value; //apenas para teste
    input_macarrao_de_arroz = all_values2[13].value; //apenas para teste
    //input_nhoque_de_batata_doce = all_values2[14].value; //apenas para teste
    input_grao_de_bico = all_values2[14].value; //apenas para teste
    input_macarrao_tradicional = all_values2[15].value; //apenas para teste
    //============== inputs dos campos dos alimentos ========================

class follow{
    constructor(nome, val_energ, carbo, total_sugar,add_sugar,protein,fat,sat_fat,trans_fat,food_fiber,sodium,ingred,allergic){
        this.nome = nome;
        this.val_energ = val_energ;
        this.carbo = carbo;
        this.total_sugar = total_sugar;
        this.add_sugar = add_sugar;
        this.protein = protein;
        this.fat = fat;
        this.sat_fat = sat_fat
        this.trans_fat = trans_fat;
        this.food_fiber = food_fiber;
        this.sodium = sodium;
        this.ingred = ingred;
        this.allergic = allergic
    }
    getDynamicPropertyValue(proteryName){
        return this[proteryName]
    }
}

let lentilha = new follow('Lentilha',152,25,0,0,12,0.4,0,0,1.5,236,'Lentilha, tomate, cebola, cheiro verde, alho, sal, chimichurri, vinagrete desidratado, cebolinha e salsinha secas, páprica picante, páprica defumada, colorau e folhas de louro', 'ALÉRGICOS: PODE CONTER GLÚTEN');

let mix_de_legumes = new follow(52,8.4,0,0,1.7,1.3,0.2,0,2.9,180,'Cenoura, abóbrinha, berinjela, brócolis, couve-flor, azeite de oliva, sal, lemon pepper, alho granulado, cebolinha e salsinha secas','ALÉRGICOS: PODE CONTER GLÚTEN');

let arroz_integral = new follow(179,39,0,0,3.7,0.9,0.9,0.2,0,2.4,159,'Arroz integral e sal','ALÉRGICOS: PODE CONTER GLÚTEN');

let arroz_integral_colorido = new follow(189,41,0,0,4.1,1,0.2,0,3.2,164,'Arroz integral, vagem, ceboura e sal','ALÉRGICOS: PODE CONTER GLÚTEN');

let arroz_branco = new follow(120,26,0,0,2.5,0.7,0.1,0,0.5,119,'Arroz branco, azeite de oliva, alho e sal','ALÉRGICOS: PODE CONTER GLÚTEN');

let escondidinho_de_aipim = new follow(101,24,0,0,0.8,0.2,0,0,0.6,212,'Aipim, sal, alho, orégano seco e água','ALÉRGICOS: PODE CONTER GLÚTEN');

let batata_doce_rustica = new follow(173,38,0,0,1.7,1.6,0.2,0,3.5,386,'Batata doce, azeite de oliva, sal, páprica defumada, orégano fresco, orégano seco e salsinha e cebolinha secas','ALÉRGICOS: PODE CONTER GLÚTEN');

let pure_de_abobora_cabotia = new follow(60,11,0,0,2.3,0.7,0.2,0,2.9,212,'Abóbora cabotiá, água, sal, vinagrete desidratado, salsinha e cebolinha secas, lemon pepper e gengibre em pó','ALÉRGICOS: PODE CONTER GLÚTEN');

let pure_de_batata_inglesa = new follow(85,19,0,0,2.3,0,0,0,1.6,346,'Batata inglesa, cheiro verde, sal, água, alho granulado e ervas finas','ALÉRGICOS: PODE CONTER GLÚTEN');

let pure_de_batat_salsa = new follow(123,29,0,0,1.4,0.2,0,0,2.5,325,'Batata salsa, cheiro verde, sal, alho, água e nóz moscada','ALÉRGICOS: PODE CONTER GLÚTEN');

let pure_de_batata_doce = new follow(153,36,0,0,1.7,0.2,0,0,3.3,357,'Batata doce, cheiro verde, sal, alho e água','ALÉRGICOS: PODE CONTER GLÚTEN');

let macarrao_integral = new follow(178,37,0,0,5.4,0.9,0,0,1.6,158,'Farinha de trigo integral, fibra de trigo, corantes naturais: urucum e cúrcuma e sal','CONTÉM GLÚTEN. ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO. PODE CONTER OVOS, SOJA, CEVADA, AVEIA E CENTEIO');

let macarrao_de_arroz = new follow(182,40,0,0,3.5,0.9,0.3,0,0.4,161,'Farinha de arroz, corantes naturais: cúrcuma e urucum e sal','ALÉRGICOS: PODE CONTER GLÚTEN');

let grao_de_bico = new follow(150,24,0,0,8.6,2.2,0.4,0,5.1,113,'Grão de bico, tomate, cebola, cheiro verde, sal, alho, chimichurri, colorau, vinagrete desidratado e páprica defumada','ALÉRGICOS: PODE CONTER GLÚTEN');

let feijao = new follow(84,15,0,0,5.4,0.3,0,0,5.4,76,'Feijão preto, tomate, cebola, cheiro verde, sal, alho, chimichurri, vinagrete desidratado, salsinha e cebolinha secas, páprica defumada, páprica picante, colorau e louro','ALÉRGICOS: PODE CONTER GLÚTEN');

let macarrao_tradicional = new follow(137,29,0,0,4.3,0.4,0,0,2.9,126,'Sêmola de trigo enriquecida com ferro e ácido fólico, farelo de trigo, fibra de trigo e sal','CONTÉM GLÚTEN. ALÉRGICOS: CONTÉM DERIVADOS DE TRIGO');



//============ calculo lentilha =======================================
let result_val_energ_lentilha = (lentilha.val_energ/100)*input_lentilha;
let result_carbo_lentilha = (lentilha.carbo/100)*input_lentilha;
let result_total_sugar_lentilha = (lentilha.total_sugar/100)*input_lentilha;
let result_add_sugar_lentilha = (lentilha.add_sugar/100)*input_lentilha;
let result_protein_lentilha = (lentilha.protein/100)*input_lentilha;
let result_fat_lentilha = (lentilha.fat/100)*input_lentilha;
let result_sat_fat_lentilha = (lentilha.sat_fat/100)*input_lentilha;
let result_trans_fat_lentilha = (lentilha.trans_fat/100)*input_lentilha;
let result_food_fiber_lentilha = (lentilha.food_fiber/100)*input_lentilha;
let result_sodium_lentilha = (lentilha.sodium/100)*input_lentilha;
//============ calculo lentilha =======================================

//============ calculo mix de legumes =======================================
let result_val_energ_mix_de_legumes = (mix_de_legumes.val_energ/100)*input_mix_de_legumes;
let result_carbo_mix_de_legumes = (mix_de_legumes.carbo/100)*input_mix_de_legumes;
let result_total_sugar_mix_de_legumes = (mix_de_legumes.total_sugar/100)*input_mix_de_legumes;
let result_add_sugar_mix_de_legumes = (mix_de_legumes.add_sugar/100)*input_mix_de_legumes;
let result_protein_mix_de_legumes = (mix_de_legumes.protein/100)*input_mix_de_legumes;
let result_fat_mix_de_legumes = (mix_de_legumes.fat/100)*input_mix_de_legumes;
let result_sat_fat_mix_de_legumes = (mix_de_legumes.sat_fat/100)*input_mix_de_legumes;
let result_trans_fat_mix_de_legumes = (mix_de_legumes.trans_fat/100)*input_mix_de_legumes;
let result_food_fiber_mix_de_legumes = (mix_de_legumes.food_fiber/100)*input_mix_de_legumes;
let result_sodium_mix_de_legumes = (mix_de_legumes.sodium/100)*input_mix_de_legumes;
//============ calculo mix de legumes =======================================

//============ calculo arroz_integral =======================================
let result_val_energ_arroz_integral = (arroz_integral.val_energ/100)*input_arroz_integral;
let result_carbo_arroz_integral = (arroz_integral.carbo/100)*input_arroz_integral;
let result_total_sugar_arroz_integral = (arroz_integral.total_sugar/100)*input_arroz_integral;
let result_add_sugar_arroz_integral = (arroz_integral.add_sugar/100)*input_arroz_integral;
let result_protein_arroz_integral = (arroz_integral.protein/100)*input_arroz_integral;
let result_fat_arroz_integral = (arroz_integral.fat/100)*input_arroz_integral;
let result_sat_fat_arroz_integral = (arroz_integral.sat_fat/100)*input_arroz_integral;
let result_trans_fat_arroz_integral = (arroz_integral.trans_fat/100)*input_arroz_integral;
let result_food_fiber_arroz_integral = (arroz_integral.food_fiber/100)*input_arroz_integral;
let result_sodium_arroz_integral = (arroz_integral.sodium/100)*input_arroz_integral;
//============ calculo arroz_integral =======================================

//============ calculo arroz_integral_colorido =======================================
let result_val_energ_arroz_integral_colorido = (arroz_integral_colorido.val_energ/100)*input_arroz_integral_colorido;
let result_carbo_arroz_integral_colorido = (arroz_integral_colorido.carbo/100)*input_arroz_integral_colorido;
let result_total_sugar_arroz_integral_colorido = (arroz_integral_colorido.total_sugar/100)*input_arroz_integral_colorido;
let result_add_sugar_arroz_integral_colorido = (arroz_integral_colorido.add_sugar/100)*input_arroz_integral_colorido;
let result_protein_arroz_integral_colorido = (arroz_integral_colorido.protein/100)*input_arroz_integral_colorido;
let result_fat_arroz_integral_colorido = (arroz_integral_colorido.fat/100)*input_arroz_integral_colorido;
let result_sat_fat_arroz_integral_colorido = (arroz_integral_colorido.sat_fat/100)*input_arroz_integral_colorido;
let result_trans_fat_arroz_integral_colorido = (arroz_integral_colorido.trans_fat/100)*input_arroz_integral_colorido;
let result_food_fiber_arroz_integral_colorido = (arroz_integral_colorido.food_fiber/100)*input_arroz_integral_colorido;
let result_sodium_arroz_integral_colorido = (arroz_integral_colorido.sodium/100)*input_arroz_integral_colorido;
//============ calculo arroz_integral_colorido =======================================

//============ calculo arroz_branco =======================================
let result_val_energ_arroz_branco = (arroz_branco.val_energ/100)*input_arroz_branco;
let result_carbo_arroz_branco = (arroz_branco.carbo/100)*input_arroz_branco;
let result_total_sugar_arroz_branco = (arroz_branco.total_sugar/100)*input_arroz_branco;
let result_add_sugar_arroz_branco = (arroz_branco.add_sugar/100)*input_arroz_branco;
let result_protein_arroz_branco = (arroz_branco.protein/100)*input_arroz_branco;
let result_fat_arroz_branco = (arroz_branco.fat/100)*input_arroz_branco;
let result_sat_fat_arroz_branco = (arroz_branco.sat_fat/100)*input_arroz_branco;
let result_trans_fat_arroz_branco = (arroz_branco.trans_fat/100)*input_arroz_branco;
let result_food_fiber_arroz_branco = (arroz_branco.food_fiber/100)*input_arroz_branco;
let result_sodium_arroz_branco = (arroz_branco.sodium/100)*input_arroz_branco;
//============ calculo arroz_branco =======================================

//============ calculo escondidinho_de_aipim =======================================
let result_val_energ_escondidinho_de_aipim = (escondidinho_de_aipim.val_energ/100)*input_escondidinho_de_aipim;
let result_carbo_escondidinho_de_aipim = (escondidinho_de_aipim.carbo/100)*input_escondidinho_de_aipim;
let result_total_sugar_escondidinho_de_aipim = (escondidinho_de_aipim.total_sugar/100)*input_escondidinho_de_aipim;
let result_add_sugar_escondidinho_de_aipim = (escondidinho_de_aipim.add_sugar/100)*input_escondidinho_de_aipim;
let result_protein_escondidinho_de_aipim = (escondidinho_de_aipim.protein/100)*input_escondidinho_de_aipim;
let result_fat_escondidinho_de_aipim = (escondidinho_de_aipim.fat/100)*input_escondidinho_de_aipim;
let result_sat_fat_escondidinho_de_aipim = (escondidinho_de_aipim.sat_fat/100)*input_escondidinho_de_aipim;
let result_trans_fat_escondidinho_de_aipim = (escondidinho_de_aipim.trans_fat/100)*input_escondidinho_de_aipim;
let result_food_fiber_escondidinho_de_aipim = (escondidinho_de_aipim.food_fiber/100)*input_escondidinho_de_aipim;
let result_sodium_escondidinho_de_aipim = (escondidinho_de_aipim.sodium/100)*input_escondidinho_de_aipim;
//============ calculo escondidinho_de_aipim =======================================

//============ calculo batata_doce_rustica =======================================
let result_val_energ_batata_doce_rustica = (batata_doce_rustica.val_energ/100)*input_batata_doce_rustica;
let result_carbo_batata_doce_rustica = (batata_doce_rustica.carbo/100)*input_batata_doce_rustica;
let result_total_sugar_batata_doce_rustica = (batata_doce_rustica.total_sugar/100)*input_batata_doce_rustica;
let result_add_sugar_batata_doce_rustica = (batata_doce_rustica.add_sugar/100)*input_batata_doce_rustica;
let result_protein_batata_doce_rustica = (batata_doce_rustica.protein/100)*input_batata_doce_rustica;
let result_fat_batata_doce_rustica = (batata_doce_rustica.fat/100)*input_batata_doce_rustica;
let result_sat_fat_batata_doce_rustica = (batata_doce_rustica.sat_fat/100)*input_batata_doce_rustica;
let result_trans_fat_batata_doce_rustica = (batata_doce_rustica.trans_fat/100)*input_batata_doce_rustica;
let result_food_fiber_batata_doce_rustica = (batata_doce_rustica.food_fiber/100)*input_batata_doce_rustica;
let result_sodium_batata_doce_rustica = (batata_doce_rustica.sodium/100)*input_batata_doce_rustica;
//============ calculo batata_doce_rustica =======================================

//============ calculo pure_de_abobora_cabotia =======================================
let result_val_energ_pure_de_abobora_cabotia = (pure_de_abobora_cabotia.val_energ/100)*input_pure_de_abobora_cabotia;
let result_carbo_pure_de_abobora_cabotia = (pure_de_abobora_cabotia.carbo/100)*input_pure_de_abobora_cabotia;
let result_total_sugar_pure_de_abobora_cabotia = (pure_de_abobora_cabotia.total_sugar/100)*input_pure_de_abobora_cabotia;
let result_add_sugar_pure_de_abobora_cabotia = (pure_de_abobora_cabotia.add_sugar/100)*input_pure_de_abobora_cabotia;
let result_protein_pure_de_abobora_cabotia = (pure_de_abobora_cabotia.protein/100)*input_pure_de_abobora_cabotia;
let result_fat_pure_de_abobora_cabotia = (pure_de_abobora_cabotia.fat/100)*input_pure_de_abobora_cabotia;
let result_sat_fat_pure_de_abobora_cabotia = (pure_de_abobora_cabotia.sat_fat/100)*input_pure_de_abobora_cabotia;
let result_trans_fat_pure_de_abobora_cabotia = (pure_de_abobora_cabotia.trans_fat/100)*input_pure_de_abobora_cabotia;
let result_food_fiber_pure_de_abobora_cabotia = (pure_de_abobora_cabotia.food_fiber/100)*input_pure_de_abobora_cabotia;
let result_sodium_pure_de_abobora_cabotia = (pure_de_abobora_cabotia.sodium/100)*input_pure_de_abobora_cabotia;
//============ calculo pure_de_abobora_cabotia =======================================

//============ calculo pure_de_batata_inglesa =======================================
let result_val_energ_pure_de_batata_inglesa = (pure_de_batata_inglesa.val_energ/100)*input_pure_de_batata_inglesa;
let result_carbo_pure_de_batata_inglesa = (pure_de_batata_inglesa.carbo/100)*input_pure_de_batata_inglesa;
let result_total_sugar_pure_de_batata_inglesa = (pure_de_batata_inglesa.total_sugar/100)*input_pure_de_batata_inglesa;
let result_add_sugar_pure_de_batata_inglesa = (pure_de_batata_inglesa.add_sugar/100)*input_pure_de_batata_inglesa;
let result_protein_pure_de_batata_inglesa = (pure_de_batata_inglesa.protein/100)*input_pure_de_batata_inglesa;
let result_fat_pure_de_batata_inglesa = (pure_de_batata_inglesa.fat/100)*input_pure_de_batata_inglesa;
let result_sat_fat_pure_de_batata_inglesa = (pure_de_batata_inglesa.sat_fat/100)*input_pure_de_batata_inglesa;
let result_trans_fat_pure_de_batata_inglesa = (pure_de_batata_inglesa.trans_fat/100)*input_pure_de_batata_inglesa;
let result_food_fiber_pure_de_batata_inglesa = (pure_de_batata_inglesa.food_fiber/100)*input_pure_de_batata_inglesa;
let result_sodium_pure_de_batata_inglesa = (pure_de_batata_inglesa.sodium/100)*input_pure_de_batata_inglesa;
//============ calculo pure_de_batata_inglesa =======================================

//============ calculo pure_de_batat_salsa =======================================
let result_val_energ_pure_de_batat_salsa = (pure_de_batat_salsa.val_energ/100)*input_pure_de_batata_salsa;
let result_carbo_pure_de_batat_salsa = (pure_de_batat_salsa.carbo/100)*input_pure_de_batata_salsa;
let result_total_sugar_pure_de_batat_salsa = (pure_de_batat_salsa.total_sugar/100)*input_pure_de_batata_salsa;
let result_add_sugar_pure_de_batat_salsa = (pure_de_batat_salsa.add_sugar/100)*input_pure_de_batata_salsa;
let result_protein_pure_de_batat_salsa = (pure_de_batat_salsa.protein/100)*input_pure_de_batata_salsa;
let result_fat_pure_de_batat_salsa = (pure_de_batat_salsa.fat/100)*input_pure_de_batata_salsa;
let result_sat_fat_pure_de_batat_salsa = (pure_de_batat_salsa.sat_fat/100)*input_pure_de_batata_salsa;
let result_trans_fat_pure_de_batat_salsa = (pure_de_batat_salsa.trans_fat/100)*input_pure_de_batata_salsa;
let result_food_fiber_pure_de_batat_salsa = (pure_de_batat_salsa.food_fiber/100)*input_pure_de_batata_salsa;
let result_sodium_pure_de_batat_salsa = (pure_de_batat_salsa.sodium/100)*input_pure_de_batata_salsa;
//============ calculo pure_de_batat_salsa =======================================

//============ calculo pure_de_batata_doce =======================================
let result_val_energ_pure_de_batata_doce = (pure_de_batata_doce.val_energ/100)*input_pure_de_batata_doce;
let result_carbo_pure_de_batata_doce = (pure_de_batata_doce.carbo/100)*input_pure_de_batata_doce;
let result_total_sugar_pure_de_batata_doce = (pure_de_batata_doce.total_sugar/100)*input_pure_de_batata_doce;
let result_add_sugar_pure_de_batata_doce = (pure_de_batata_doce.add_sugar/100)*input_pure_de_batata_doce;
let result_protein_pure_de_batata_doce = (pure_de_batata_doce.protein/100)*input_pure_de_batata_doce;
let result_fat_pure_de_batata_doce = (pure_de_batata_doce.fat/100)*input_pure_de_batata_doce;
let result_sat_fat_pure_de_batata_doce = (pure_de_batata_doce.sat_fat/100)*input_pure_de_batata_doce;
let result_trans_fat_pure_de_batata_doce = (pure_de_batata_doce.trans_fat/100)*input_pure_de_batata_doce;
let result_food_fiber_pure_de_batata_doce = (pure_de_batata_doce.food_fiber/100)*input_pure_de_batata_doce;
let result_sodium_pure_de_batata_doce = (pure_de_batata_doce.sodium/100)*input_pure_de_batata_doce;
//============ calculo pure_de_batata_doce =======================================

//============ calculo macarrao_integral =======================================
let result_val_energ_macarrao_integral = (macarrao_integral.val_energ/100)*input_macarrao_integral;
let result_carbo_macarrao_integral = (macarrao_integral.carbo/100)*input_macarrao_integral;
let result_total_sugar_macarrao_integral = (macarrao_integral.total_sugar/100)*input_macarrao_integral;
let result_add_sugar_macarrao_integral = (macarrao_integral.add_sugar/100)*input_macarrao_integral;
let result_protein_macarrao_integral = (macarrao_integral.protein/100)*input_macarrao_integral;
let result_fat_macarrao_integral = (macarrao_integral.fat/100)*input_macarrao_integral;
let result_sat_fat_macarrao_integral = (macarrao_integral.sat_fat/100)*input_macarrao_integral;
let result_trans_fat_macarrao_integral = (macarrao_integral.trans_fat/100)*input_macarrao_integral;
let result_food_fiber_macarrao_integral = (macarrao_integral.food_fiber/100)*input_macarrao_integral;
let result_sodium_macarrao_integral = (macarrao_integral.sodium/100)*input_macarrao_integral;
//============ calculo macarrao_integral =======================================

//============ calculo macarrao_de_arroz =======================================
let result_val_energ_macarrao_de_arroz = (macarrao_de_arroz.val_energ/100)*input_macarrao_de_arroz;
let result_carbo_macarrao_de_arroz = (macarrao_de_arroz.carbo/100)*input_macarrao_de_arroz;
let result_total_sugar_macarrao_de_arroz = (macarrao_de_arroz.total_sugar/100)*input_macarrao_de_arroz;
let result_add_sugar_macarrao_de_arroz = (macarrao_de_arroz.add_sugar/100)*input_macarrao_de_arroz;
let result_protein_macarrao_de_arroz = (macarrao_de_arroz.protein/100)*input_macarrao_de_arroz;
let result_fat_macarrao_de_arroz = (macarrao_de_arroz.fat/100)*input_macarrao_de_arroz;
let result_sat_fat_macarrao_de_arroz = (macarrao_de_arroz.sat_fat/100)*input_macarrao_de_arroz;
let result_trans_fat_macarrao_de_arroz = (macarrao_de_arroz.trans_fat/100)*input_macarrao_de_arroz;
let result_food_fiber_macarrao_de_arroz = (macarrao_de_arroz.food_fiber/100)*input_macarrao_de_arroz;
let result_sodium_macarrao_de_arroz = (macarrao_de_arroz.sodium/100)*input_macarrao_de_arroz;
//============ calculo macarrao_de_arroz =======================================

//============ calculo grao_de_bico =======================================
let result_val_energ_grao_de_bico = (grao_de_bico.val_energ/100)*input_grao_de_bico;
let result_carbo_grao_de_bico = (grao_de_bico.carbo/100)*input_grao_de_bico;
let result_total_sugar_grao_de_bico = (grao_de_bico.total_sugar/100)*input_grao_de_bico;
let result_add_sugar_grao_de_bico = (grao_de_bico.add_sugar/100)*input_grao_de_bico;
let result_protein_grao_de_bico = (grao_de_bico.protein/100)*input_grao_de_bico;
let result_fat_grao_de_bico = (grao_de_bico.fat/100)*input_grao_de_bico;
let result_sat_fat_grao_de_bico = (grao_de_bico.sat_fat/100)*input_grao_de_bico;
let result_trans_fat_grao_de_bico = (grao_de_bico.trans_fat/100)*input_grao_de_bico;
let result_food_fiber_grao_de_bico = (grao_de_bico.food_fiber/100)*input_grao_de_bico;
let result_sodium_grao_de_bico = (grao_de_bico.sodium/100)*input_grao_de_bico;
//============ calculo grao_de_bico =======================================

//============ calculo feijao =======================================
let result_val_energ_feijao = (feijao.val_energ/100)*input_feijao;
let result_carbo_feijao = (feijao.carbo/100)*input_feijao;
let result_total_sugar_feijao = (feijao.total_sugar/100)*input_feijao;
let result_add_sugar_feijao = (feijao.add_sugar/100)*input_feijao;
let result_protein_feijao = (feijao.protein/100)*input_feijao;
let result_fat_feijao = (feijao.fat/100)*input_feijao;
let result_sat_fat_feijao = (feijao.sat_fat/100)*input_feijao;
let result_trans_fat_feijao = (feijao.trans_fat/100)*input_feijao;
let result_food_fiber_feijao = (feijao.food_fiber/100)*input_feijao;
let result_sodium_feijao = (feijao.sodium/100)*input_feijao;
//============ calculo feijao =======================================

//============ calculo macarrao_tradicional =======================================
let result_val_energ_macarrao_tradicional = (macarrao_tradicional.val_energ/100)*input_macarrao_tradicional;
let result_carbo_macarrao_tradicional = (macarrao_tradicional.carbo/100)*input_macarrao_tradicional;
let result_total_sugar_macarrao_tradicional = (macarrao_tradicional.total_sugar/100)*input_macarrao_tradicional;
let result_add_sugar_macarrao_tradicional = (macarrao_tradicional.add_sugar/100)*input_macarrao_tradicional;
let result_protein_macarrao_tradicional = (macarrao_tradicional.protein/100)*input_macarrao_tradicional;
let result_fat_macarrao_tradicional = (macarrao_tradicional.fat/100)*input_macarrao_tradicional;
let result_sat_fat_macarrao_tradicional = (macarrao_tradicional.sat_fat/100)*input_macarrao_tradicional;
let result_trans_fat_macarrao_tradicional = (macarrao_tradicional.trans_fat/100)*input_macarrao_tradicional;
let result_food_fiber_macarrao_tradicional = (macarrao_tradicional.food_fiber/100)*input_macarrao_tradicional;
let result_sodium_macarrao_tradicional = (macarrao_tradicional.sodium/100)*input_macarrao_tradicional;
//============ calculo macarrao_tradicional =======================================

//===================== result soma calorias ===============================
let result_val_energ_follow = (
 result_val_energ_lentilha
+result_val_energ_mix_de_legumes
+result_val_energ_arroz_integral
+result_val_energ_arroz_integral_colorido
+result_val_energ_arroz_branco
+result_val_energ_escondidinho_de_aipim
+result_val_energ_batata_doce_rustica
+result_val_energ_pure_de_abobora_cabotia
+result_val_energ_pure_de_batata_inglesa
+result_val_energ_pure_de_batat_salsa
+result_val_energ_pure_de_batata_doce
+result_val_energ_macarrao_integral
+result_val_energ_macarrao_de_arroz
+result_val_energ_grao_de_bico
+result_val_energ_feijao
+result_val_energ_macarrao_tradicional);
//===================== result soma calorias ===============================


//===================== result soma carboidrato ===============================
let result_carbo_follow = (
    result_carbo_lentilha
    +result_carbo_mix_de_legumes
    +result_carbo_arroz_integral
    +result_carbo_arroz_integral_colorido
    +result_carbo_arroz_branco
    +result_carbo_escondidinho_de_aipim
    +result_carbo_batata_doce_rustica
    +result_carbo_pure_de_abobora_cabotia
    +result_carbo_pure_de_batata_inglesa
    +result_carbo_pure_de_batat_salsa
    +result_carbo_pure_de_batata_doce
    +result_carbo_macarrao_integral
    +result_carbo_macarrao_de_arroz
    +result_carbo_grao_de_bico
    +result_carbo_feijao
    +result_val_energ_macarrao_tradicional);
//===================== result soma carboidrato ===============================


//===================== result soma total sugar ===============================
let result_total_sugar_follow = (
    result_total_sugar_lentilha
    +result_total_sugar_mix_de_legumes
    +result_total_sugar_arroz_integral
    +result_total_sugar_arroz_integral_colorido
    +result_total_sugar_arroz_branco
    +result_total_sugar_escondidinho_de_aipim
    +result_total_sugar_batata_doce_rustica
    +result_total_sugar_pure_de_abobora_cabotia
    +result_total_sugar_pure_de_batata_inglesa
    +result_total_sugar_pure_de_batat_salsa
    +result_total_sugar_pure_de_batata_doce
    +result_total_sugar_macarrao_integral
    +result_total_sugar_macarrao_de_arroz
    +result_total_sugar_grao_de_bico
    +result_total_sugar_feijao
    +result_val_energ_macarrao_tradicional);
//===================== result soma total sugar ===============================


//===================== result soma add sugar ===============================
let result_add_sugar_follow = (
    result_add_sugar_lentilha
    +result_add_sugar_mix_de_legumes
    +result_add_sugar_arroz_integral
    +result_add_sugar_arroz_integral_colorido
    +result_add_sugar_arroz_branco
    +result_add_sugar_escondidinho_de_aipim
    +result_add_sugar_batata_doce_rustica
    +result_add_sugar_pure_de_abobora_cabotia
    +result_add_sugar_pure_de_batata_inglesa
    +result_add_sugar_pure_de_batat_salsa
    +result_add_sugar_pure_de_batata_doce
    +result_add_sugar_macarrao_integral
    +result_add_sugar_macarrao_de_arroz
    +result_add_sugar_grao_de_bico
    +result_add_sugar_feijao
    +result_val_energ_macarrao_tradicional);
//===================== result soma add sugar ===============================


//===================== result soma protein ===============================
let result_protein_follow = (
    result_protein_lentilha
    +result_protein_mix_de_legumes
    +result_protein_arroz_integral
    +result_protein_arroz_integral_colorido
    +result_protein_arroz_branco
    +result_protein_escondidinho_de_aipim
    +result_protein_batata_doce_rustica
    +result_protein_pure_de_abobora_cabotia
    +result_protein_pure_de_batata_inglesa
    +result_protein_pure_de_batat_salsa
    +result_protein_pure_de_batata_doce
    +result_protein_macarrao_integral
    +result_protein_macarrao_de_arroz
    +result_protein_grao_de_bico
    +result_protein_feijao
    +result_val_energ_macarrao_tradicional);
//===================== result soma protein ===============================


//===================== result soma fat ===============================
let result_fat_follow = (
    result_fat_lentilha
    +result_fat_mix_de_legumes
    +result_fat_arroz_integral
    +result_fat_arroz_integral_colorido
    +result_fat_arroz_branco
    +result_fat_escondidinho_de_aipim
    +result_fat_batata_doce_rustica
    +result_fat_pure_de_abobora_cabotia
    +result_fat_pure_de_batata_inglesa
    +result_fat_pure_de_batat_salsa
    +result_fat_pure_de_batata_doce
    +result_fat_macarrao_integral
    +result_fat_macarrao_de_arroz
    +result_fat_grao_de_bico
    +result_fat_feijao
    +result_val_energ_macarrao_tradicional);
//===================== result soma fat ===============================


//===================== result soma sat fat ===============================
let result_sat_fat_follow = (
    result_sat_fat_lentilha
    +result_sat_fat_mix_de_legumes
    +result_sat_fat_arroz_integral
    +result_sat_fat_arroz_integral_colorido
    +result_sat_fat_arroz_branco
    +result_sat_fat_escondidinho_de_aipim
    +result_sat_fat_batata_doce_rustica
    +result_sat_fat_pure_de_abobora_cabotia
    +result_sat_fat_pure_de_batata_inglesa
    +result_sat_fat_pure_de_batat_salsa
    +result_sat_fat_pure_de_batata_doce
    +result_sat_fat_macarrao_integral
    +result_sat_fat_macarrao_de_arroz
    +result_sat_fat_grao_de_bico
    +result_sat_fat_feijao
    +result_val_energ_macarrao_tradicional);
//===================== result soma sat fat ===============================


//===================== result soma trans fat ===============================
let result_trans_fat_follow = (
    result_trans_fat_lentilha
    +result_trans_fat_mix_de_legumes
    +result_trans_fat_arroz_integral
    +result_trans_fat_arroz_integral_colorido
    +result_trans_fat_arroz_branco
    +result_trans_fat_escondidinho_de_aipim
    +result_trans_fat_batata_doce_rustica
    +result_trans_fat_pure_de_abobora_cabotia
    +result_trans_fat_pure_de_batata_inglesa
    +result_trans_fat_pure_de_batat_salsa
    +result_trans_fat_pure_de_batata_doce
    +result_trans_fat_macarrao_integral
    +result_trans_fat_macarrao_de_arroz
    +result_trans_fat_grao_de_bico
    +result_trans_fat_feijao
    +result_val_energ_macarrao_tradicional);
//===================== result soma trans fat ===============================


//===================== result soma food fiber ===============================
let result_food_fiber_follow = (
    result_food_fiber_lentilha
    +result_food_fiber_mix_de_legumes
    +result_food_fiber_arroz_integral
    +result_food_fiber_arroz_integral_colorido
    +result_food_fiber_arroz_branco
    +result_food_fiber_escondidinho_de_aipim
    +result_food_fiber_batata_doce_rustica
    +result_food_fiber_pure_de_abobora_cabotia
    +result_food_fiber_pure_de_batata_inglesa
    +result_food_fiber_pure_de_batat_salsa
    +result_food_fiber_pure_de_batata_doce
    +result_food_fiber_macarrao_integral
    +result_food_fiber_macarrao_de_arroz
    +result_food_fiber_grao_de_bico
    +result_food_fiber_feijao
    +result_val_energ_macarrao_tradicional);
//===================== result soma food fiber ===============================


//===================== result soma sodium ===============================
let result_sodium_follow = (
    result_sodium_lentilha
    +result_sodium_mix_de_legumes
    +result_sodium_arroz_integral
    +result_sodium_arroz_integral_colorido
    +result_sodium_arroz_branco
    +result_sodium_escondidinho_de_aipim
    +result_sodium_batata_doce_rustica
    +result_sodium_pure_de_abobora_cabotia
    +result_sodium_pure_de_batata_inglesa
    +result_sodium_pure_de_batat_salsa
    +result_sodium_pure_de_batata_doce
    +result_sodium_macarrao_integral
    +result_sodium_macarrao_de_arroz
    +result_sodium_grao_de_bico
    +result_sodium_feijao
    +result_val_energ_macarrao_tradicional);
//===================== result soma sodium ===============================


//============ resultado 100g ========================================
function result_100_follow (variable){
    let result = 0
    if(input_lentilha > 0){result += lentilha.getDynamicPropertyValue(variable)}else{result += 0;}
    if(input_mix_de_legumes > 0){result += mix_de_legumes.getDynamicPropertyValue(variable)}else{result += 0;}
    if(input_arroz_integral > 0){result += arroz_integral.getDynamicPropertyValue(variable);}else{result += 0}
    if(input_arroz_integral_colorido > 0){result += arroz_integral_colorido.getDynamicPropertyValue(variable)}else{result += 0}
    if(input_arroz_branco > 0){result += arroz_branco.getDynamicPropertyValue(variable);}else{result += 0;}
    if(input_escondidinho_de_aipim > 0){result += escondidinho_de_aipim.getDynamicPropertyValue(variable);}else{result += 0}
    if(input_feijao > 0){result += feijao.getDynamicPropertyValue(variable);}else{result += 0;}
    if(input_batata_doce_rustica > 0){result += batata_doce_rustica.getDynamicPropertyValue(variable);}else{result += 0}
    if(input_pure_de_abobora_cabotia > 0){result += pure_de_abobora_cabotia.getDynamicPropertyValue(variable);}else{result += 0}
    if(input_pure_de_batata_inglesa > 0){result += pure_de_batata_inglesa.getDynamicPropertyValue(variable);}else{result += 0;}
    if(input_pure_de_batata_salsa > 0){result += pure_de_batat_salsa.getDynamicPropertyValue(variable);}else{result += 0;}
    if(input_pure_de_batata_doce > 0){result += pure_de_batata_doce.getDynamicPropertyValue(variable);}else{result += 0;}
    if(input_macarrao_integral > 0){result += macarrao_integral.getDynamicPropertyValue(variable);}else{result += 0;}
    if(input_macarrao_de_arroz > 0){result += macarrao_de_arroz.getDynamicPropertyValue(variable);}else{result += 0;}
    if(input_grao_de_bico > 0){result += grao_de_bico.getDynamicPropertyValue(variable);}else{result += 0;}
    if(input_macarrao_tradicional > 0){result += macarrao_tradicional.getDynamicPropertyValue(variable);}else{result += 0;}

    return result;
}
//============ resultado 100g ========================================



//====================== resultados VD* ================================
let result_vd_val_energ_follow = (result_val_energ_follow*100)/2000;
let result_vd_carbo_follow = (result_carbo_follow*100)/300;
let result_vd_total_sugar_follow = 0;
let result_vd_add_sugar_follow = 0;
let result_vd_protein_follow = (result_protein_follow*100)/75;
let result_vd_fat_follow = (result_fat_follow*100)/55;
let result_vd_sat_fat_follow = (result_sat_fat_follow*100)/22;
let result_vd_trans_fat_follow = 0;
let result_vd_food_fiber_follow = (result_food_fiber_follow*100)/25;
let result_vd_sodium_follow = (result_sodium_follow*100)/2400;
//====================== resultados VD* ================================


/*
//======= resultados ===============================================
console.log('valor energético: '+result_val_energ.toFixed(2));
console.log('carboidratos: '+result_carbo.toFixed(2));
console.log('açucar total: '+result_total_sugar.toFixed(2));
console.log('açucar adicional: '+result_add_sugar.toFixed(2));
console.log('proteína: '+result_protein.toFixed(2));
console.log('gorduras: '+result_fat.toFixed(2));
console.log('gorduras saturadas: '+result_sat_fat.toFixed(2));
console.log('gorduras trans: '+result_trans_fat.toFixed(2));
console.log('fibra alimentar: '+result_food_fiber.toFixed(2));
console.log('sódio: '+result_sodium.toFixed(2));

console.log('======= result 100 =========');
console.log('100 valor energetico: '+ result_100('val_energ'));
console.log('100 valor energetico: '+ result_100('carbo'));
console.log('100 valor energetico: '+ result_100('total_sugar'));
console.log('100 valor energetico: '+ result_100('add_sugar'));
console.log('100 valor energetico: '+ result_100('protein'));
console.log('100 valor energetico: '+ result_100('fat'));
console.log('100 valor energetico: '+ result_100('sat_fat'));
console.log('100 valor energetico: '+ result_100('trans_fat'));
console.log('100 valor energetico: '+ result_100('food_fiber'));
console.log('100 valor energetico: '+ result_100('sodium'));
//======= resultados ===============================================
*/

/*
//==================== campos dos resultados ==============================
const table_items = document.querySelectorAll('.table_items');

document.getElementById('table_100_val_energ').innerHTML = result_100_follow('val_energ').toFixed(1) + result_100('val_energ').toFixed(1);
document.getElementById('table_val_energ').innerHTML = result_val_energ_follow.toFixed(1) + result_val_energ.toFixed(1);
document.getElementById('table_vd_val_energ').innerHTML = result_vd_val_energ_follow.toFixed(1) + result_vd_val_energ.toFixed(1);

document.getElementById('table_100_carbo').innerHTML = result_100_follow('carbo').toFixed(1) + result_100('carbo').toFixed(1);
document.getElementById('table_carbo').innerHTML = result_carbo_follow.toFixed(1) + result_carbo.toFixed(1);
document.getElementById('table_vd_carbo').innerHTML = result_vd_carbo_follow.toFixed(1) + result_vd_carbo.toFixed(1);

document.getElementById('table_100_total_sugar').innerHTML = result_100_follow('total_sugar').toFixed(1) + result_100('total_sugar').toFixed(1);
document.getElementById('table_total_sugar').innerHTML = result_total_sugar_follow.toFixed(1) + result_total_sugar.toFixed(1);
document.getElementById('table_vd_total_sugar').innerHTML = result_vd_total_sugar_follow.toFixed(1) + result_vd_total_sugar.toFixed(1);

document.getElementById('table_100_add_sugar').innerHTML = result_100_follow('add_sugar').toFixed(1) + result_100('add_sugar').toFixed(1);
document.getElementById('table_add_sugar').innerHTML = result_add_sugar_follow.toFixed(1) + result_add_sugar.toFixed(1);
document.getElementById('table_vd_add_sugar').innerHTML = result_vd_add_suga_follow.toFixed(1) + result_vd_add_sugar.toFixed(1);

document.getElementById('table_100_protein').innerHTML = result_100_follow('protein').toFixed(1) + result_100('protein').toFixed(1);
document.getElementById('table_protein').innerHTML = result_protein_follow.toFixed(1) + result_protein.toFixed(1);
document.getElementById('table_vd_protein').innerHTML = result_vd_protein_follow.toFixed(1) + result_vd_protein.toFixed(1);

document.getElementById('table_100_fat').innerHTML = result_100_follow('fat').toFixed(1) + result_100('fat').toFixed(1);
document.getElementById('table_fat').innerHTML = result_fat_follow.toFixed(1) + result_fat.toFixed(1);
document.getElementById('table_vd_fat').innerHTML = result_vd_fat_follow.toFixed(1) + result_vd_fat.toFixed(1);

document.getElementById('table_100_sat_fat').innerHTML = result_100_follow('sat_fat').toFixed(1) + result_100('sat_fat').toFixed(1);
document.getElementById('table_sat_fat').innerHTML = result_sat_fat_follow.toFixed(1) + result_sat_fat.toFixed(1);
document.getElementById('table_vd_sat_fat').innerHTML = result_vd_sat_fat_follow.toFixed(1) + result_vd_sat_fat.toFixed(1);

document.getElementById('table_100_trans_fat').innerHTML = result_100_follow('trans_fat').toFixed(1) + result_100('trans_fat').toFixed(1);
document.getElementById('table_trans_fat').innerHTML = result_trans_fat_follow.toFixed(1) + result_trans_fat.toFixed(1);
document.getElementById('table_vd_trans_fat').innerHTML = result_vd_trans_fat_follow.toFixed(1) + result_vd_trans_fat.toFixed(1);

document.getElementById('table_100_food_fiber').innerHTML = result_100_follow('food_fiber').toFixed(1) + result_100('food_fiber').toFixed(1);
document.getElementById('table_food_fiber').innerHTML = result_food_fiber_follow.toFixed(1) + result_food_fiber.toFixed(1);
document.getElementById('table_vd_food_fiber').innerHTML = result_vd_food_fiber_follow.toFixed(1) + result_vd_food_fiber.toFixed(1);

document.getElementById('table_100_sodium').innerHTML = result_100_follow('sodium').toFixed(1) + result_100('sodium').toFixed(1);
document.getElementById('table_sodium').innerHTML = result_sodium_follow.toFixed(1) + result_sodium.toFixed(1);
document.getElementById('table_vd_sodium').innerHTML = result_vd_sodium_follow.toFixed(1) + result_vd_sodium.toFixed(1);

//==================== campos dos resultados ==============================
*/

//console.log('Valor Energético: '+result_val_energ);
//console.log('Carboidráto: '+result_carbo);




   
}