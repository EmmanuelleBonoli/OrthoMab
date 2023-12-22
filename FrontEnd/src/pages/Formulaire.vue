<script setup>

</script>

<template>
  <div class="formulaire">
    <!-- <router-link to="/" class="backMenu"><img src="/images/arrowBack.png" alt="flèche retour"/>Retour à l'accueil</router-link> -->
    <h1>Formulaire de demande de rendez-vous :</h1>
    <form class="corpsForm">
      <fieldset class="identity">
        <legend><h2>Identité</h2></legend>
        <input type="text" placeholder="votre Nom" />
        <input type="text" placeholder="votre Prénom" />
        <input type="text" placeholder="n° téléphone" />
        <input type="text" placeholder="votre Mail" />
        <input type="text" placeholder="votre Adresse" />
      </fieldset>
      <fieldset class="infoFuturPatient">
        <legend><h2>Informations</h2></legend>

        <fieldset class="futurPatientChild">
          <legend><h2>RDV à destination d'un enfant</h2></legend>
          <label>L'enfant est-il suivi par une structure?</label>
          <select>
            <option value="">--</option>
            <option value="CMP">CMP</option>
            <option value="CMPP">CMPP</option>
            <option value="IME">IME</option>
          </select>
          <h3>Motif(s) de consultation :</h3>
          <div class="motifchild">
            <div class="motifchildpart1">
              <label
                >Langage oral: inintelligibilité (on ne comprend pas
                l'enfant)</label
              >
              <label>Langage oral: défaut d'aticulation</label>
              <label>Langage oral: absence de langage oral</label>
              <label>Surdité</label>
              <label>Handicap : autisme, syndrome génétique</label>
              <label>Neurologie : trauma crânien</label>
              <label
                >Autre : Merci de préciser dans l'espace commentaires</label
              >
            </div>
            <div class="motifchildpart2">
              <input type="checkbox" name="enfant : inintelligibilité" />
              <input type="checkbox" name="enfant : défaut d'articulation" />
              <input type="checkbox" name="enfant : absence langage oral" />
              <input type="checkbox" name="enfant : surdite" />
              <input
                type="checkbox"
                name="enfant : handicap: autime, syndrome génétique"
              />
              <input
                type="checkbox"
                name="enfant : neurologie: trauma crânien"
              />
              <input type="checkbox" name="enfant : autre" />
            </div>
          </div>
        </fieldset>

        <fieldset class="futurPatientAdult">
          <legend><h2>RDV à destination d'un adulte</h2></legend>
          <h3>Motif(s) de consultation :</h3>
          <div class="motifchild">
            <div class="motifchildpart1">
              <label>Handicap : autisme, syndrome génétique</label>
              <label>Surdité</label>
              <label
                >Neurologie : traumatique (trauma crânien, AVC, etc.)</label
              >
              <label
                >Neurologie : déclin cognitif ou maladie
                neurodégénérative</label
              >
              <label
                >Autre : Merci de préciser dans l'espace commentaires</label
              >
            </div>
            <div class="motifchildpart2">
              <input
                type="checkbox"
                value="adulte : handicap : autisme, syndrome génétique"
              />
              <input type="checkbox" value="adulte : surdité" />
              <input type="checkbox" value="adulte : neurologie : traumatique" />
              <input
                type="checkbox"
                value="adulte : neurologie : déclin cognitif"
              />
              <input type="checkbox" value="adulte : autre" />
            </div>
          </div>
        </fieldset>
      </fieldset>
      <fieldset class="ComFuturPatient">
        <legend><h2>Informations diverses</h2></legend>
        <div class="comPartie">
          <h3>Vos disponibilités :</h3>
          <div class="dispos">
            <div class="days">
              <p>Jour</p>
              <p>Lundi :</p>
              <p>Mardi :</p>
              <p>Mercredi:</p>
              <p>Jeudi :</p>
              <p>Vendredi :</p>
            </div>
            <div class="morning">
              <p>Matin</p>
              <input type="checkbox" name="" /><input
                type="checkbox"
                name=""
              /><input type="checkbox" name="" /><input
                type="checkbox"
                name=""
              /><input type="checkbox" name="" />
            </div>
            <div class="afternoon">
              <p>Après-Midi</p>
              <input type="checkbox" name="" /><input
                type="checkbox"
                name=""
              /><input type="checkbox" name="" /><input
                type="checkbox"
                name=""
              /><input type="checkbox" name="" />
            </div>
          </div>
        </div>
        <div class="comPartie">
          <h3>Vos commentaires éventuels :</h3>
          <textarea
            placeholder="Ecrivez ici vos remarques ou commentaires..."
          ></textarea>
        </div>
      </fieldset>
    </form>
    <button type="submit" class="submit">Envoyer</button>
  </div>
</template>

<style lang="scss" scoped>
.formulaire {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: rgb(252, 246, 238);
// .backMenu{
//   position: fixed;
//   top: 3vh;
//   left: 2vw;
//   display: flex;
//   gap: 1vw;
//   align-items: center;
//   font-family: var(--fontfamilyTitle);
//   img{
//     width: 2vw;
//   }
// }

  h1 {
    padding-top: 1.5%;
    font-family: var(--fontfamilyText2);
    font-size: 4rem;
    text-align: center;
  }
 
  fieldset {
    border-radius: 15px;
    border: 2px solid var(--color-primary);
    font-family: var(--fontfamilyText);
  }
  input{
    padding: 0.5%;
    border-radius: 5px;
    border: 1px solid black;
    // background-color: #edf3f8;
  }
  .corpsForm {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 80vw;
    font-size: 1.3rem;
    padding: 1% 0 1% 0;
  }

  .identity {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 1.5%;
  }
  .infoFuturPatient {
    display: flex;
    justify-content: space-around; 
    // flex-wrap: wrap;
    padding: 1.5%;

    .futurPatientChild {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      min-width: 30vw;
      padding: 1.5%;
    }
    .motifchild {
      display: flex;
      justify-content: space-between;

      .motifchildpart1 {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
      }
      .motifchildpart2 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex-wrap: wrap;
      }
    }
    .futurPatientAdult {
      min-width: 30vw;
      padding: 1.5%;
    }
  }
  .ComFuturPatient {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 2%;
    gap: 2vh;
    width: 100%;

    .comPartie {
      min-width: 47%;
    }
    textarea {
      width: 100%;
      min-height: 15vh;
      padding:1%;
    }

    .dispos {
      display: flex;
      justify-content: space-around;
      width: 100%;

      .time {
        display: flex;
      }
      .days,
      .morning,
      .afternoon {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }

  }

  .submit, .backMenu {
      padding: 0 1% 0 1%;
      border-radius: 15px;
      background-color: var(--color-primary);
      color:white;
      font-size: 1.5rem;
      font-family: var(--fontfamilyText2);

      &:hover{
        background-color: var(--color-secondary)
      }
    }

@media screen and (max-width: 1000px) {
  .infoFuturPatient { 
    flex-wrap: wrap;
}
}
@media screen and (max-width: 1000px) {
  h1 { 
    padding-top: 5vh;
}
}
}
</style>
