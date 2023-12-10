<script setup>
import DownPage from "../components/DownPage.vue";
</script>

<template>
  <div class="formulaire">
    <h1>Formulaire de demande de rendez-vous :</h1>
    <form class="corpsForm">
      <fieldset class="identity">
        <legend><h2>Identité</h2></legend>
        <input type="text" placeholder="votre Nom" />
        <input type="text" placeholder="votre Prénom" />
        <input type="text" placeholder="n°téléphone" />
        <input type="text" placeholder="adresse" />
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
                name="adulte : handicap : autisme, syndrome génétique"
              />
              <input type="checkbox" name="adulte : surdité" />
              <input type="checkbox" name="adulte : neurologie : traumatique" />
              <input
                type="checkbox"
                name="adulte : neurologie : déclin cognitif"
              />
              <input type="checkbox" name="adulte : autre" />
            </div>
          </div>
        </fieldset>
      </fieldset>
      <fieldset class="ComFuturPatient">
        <legend><h2>Informations diverses</h2></legend>
        <h3>Vos disponibilités :</h3>
        <div class="dispos">
          <div class="time">
            <p>Matin</p>
            <p>Après-Midi</p>
          </div>
          <div class="days">
            <p></p>
            <p>Lundi :</p>
            <p>Mardi :</p>
            <p>Mercredi:</p>
            <p>Jeudi :</p>
            <p>Vendredi :</p>
          </div>
          <div class="morning"><input type="checkbox" name="" /><input type="checkbox" name="" /><input type="checkbox" name="" /><input type="checkbox" name="" /><input type="checkbox" name="" /></div>
          <div class="afternoon"><input type="checkbox" name="" /><input type="checkbox" name="" /><input type="checkbox" name="" /><input type="checkbox" name="" /><input type="checkbox" name="" /></div>
        </div>
        <h3>Vos commentaires éventuels :</h3>
        <textarea
          placeholder="Ecrivez ici vos remarques ou commentaires..."
        ></textarea>
      </fieldset>
    </form>
    <button type="submit">Envoyer</button>
  </div>
  <div class="wrapfooter"></div>
  <DownPage />
</template>

<style lang="scss" scoped>
.formulaire {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 95vh;

  h1 {
    padding-top: 2%;
  }
  form {
    padding: 1% 0 1% 0;
  }
  .corpsForm {
    display: flex;
    flex-direction: column;
    width: 80vw;
    font-size: 1.3rem;
  }

  .identity {
    display: flex;
    justify-content: space-around;
    padding: 2%;
  }
  .infoFuturPatient {
    display: flex;
    justify-content: space-around;
    padding: 2%;

    .futurPatientChild {
      display: flex;
      flex-direction: column;
      width: 40%;
      padding: 2%;
    }
    .motifchild {
      display: flex;
      justify-content: space-between;

      .motifchildpart1 {
        display: flex;
        flex-direction: column;
      }
      .motifchildpart2 {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      }
    }
    .futurPatientAdult {
      width: 40%;
      padding: 2%;
    }
  }
  .ComFuturPatient {
    display: flex;
    flex-direction: column;
    padding: 2%;
    gap: 2vh;

    textarea {
      width: 100%;
      min-height: 15vh;
    }
    
    .dispos{
      display: flex;
      flex-direction: column;

      .time{
        display: flex;
   
      }
      .days, .morning, .afternoon{
        display: flex;
        flex-direction: column;
      }

 
    }
  }

  .wrapfooter {
    flex-grow: 1;
  }
}
</style>
