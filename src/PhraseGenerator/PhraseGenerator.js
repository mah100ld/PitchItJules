import React, { PureComponent } from 'react'
import '../App.css'


class PhraseGenerator extends PureComponent {
    constructor(props) {
        super(props);

    }

    state = {
        wir: "",
        und: "",
        anstattVon: "",
        verb: "",
        adjektivNeu: "",
        adjektivNeu1: "",
        substantivNeu: "",
        substantiv1: "",
        substantiv2: "",
        adjektivAlt: "",
        kunde: "",
        substantivAlt: "",
        punkt: ""
    }


    PhraseGenerator = () => {
        const sikSubstantive = ["Offenheit", "Vernetzung", "Two-Speed Strategy", "Stabilität", "Moonshot Labs", "Biodiversity", "Female Empowerment", "EEG Tracking", "Speedboats", "Ecosystems", "Ökosysteme", "Kultur", "Veränderung", "Infight", "Transformation", "Diversifikation", "Cross-Pollination", "Asset", "Value", "Agilität", "Design-Thinking Prozesse", "Data-driven Organization", "Blockchain-Technologie", "Neurowissenschaften", "Brainstormings", "Impact", "Diversity"]
        const sikSubstantiveAlt = ["Prozessen", "Silodenken", "Monitor Strategien", "Allnightern", "Bonus Meilen", "Facetime Regelungen", "weißen Männern dominierten Büros", "Mansplaining", "Hierarchien", "Top-Down Hierarchien", "Gender Pay-Gap", "Status Quo", "Legacy Systemen", "Konformität"]
        const sikKunde = ["durch Meditation und Atemübungen","beim Kunden", "mittels Quantum Technologie", "durch Tokenisierung","durch Transhumanismus", "durch OKR Workshops", "in der Organisation", "im Rahmen eines Culture-Change Programms", "durch Open Innovation", "mithilfe von AI", "durch unsere Deep-Dive Methodik", "mit unserem proven Readyness-Framework", "durch Einführung einer Matrixorganisation", "durch flache Hierarchien", "mit Freibier am Freitag", "durch einen iterativen Stage-Gate Prozess", "durch Circular Economy", "mithilfe der Scrum Methodologie"]
        const sikVerben = ["verbessern", "generieren", "fordern", "fördern", "ermöglichen", "leveragen", "challengen", "updaten", "penetrieren"]
        const sikAdjektiveNeu = ["unternehmerische", "high-level", "kulturelle", "disruptive", "inkrementelle", "asset-based", "value-based", "fact-fullness", "ambidextreous","holisitische", "open-minded", "tangible", "AI-driven", "innovative", "cutting-edge", "state-of-the-art", "demand-driven", "human-centric", "client focussed", "agile"]
        const sikAdjektiveAlt = ["klassischen", "ausgedienten", "überholten", "stagnierenden", "langweiligen", "dummen", "ollen"]
        const sentence = ""

        this.setState({
            wir: "Wir",
            und: "und",
            anstattVon: "anstatt von",
            punkt: ".",
            substantiv1: (sikSubstantive[Math.floor(Math.random() * sikSubstantive.length)]),
            substantiv2: (sikSubstantive[Math.floor(Math.random() * sikSubstantive.length)]),
            verb: (sikVerben[Math.floor(Math.random() * sikVerben.length)]),
            adjektivNeu1: (sikAdjektiveNeu[Math.floor(Math.random() * sikAdjektiveNeu.length)]),
            adjektivNeu2: (sikAdjektiveNeu[Math.floor(Math.random() * sikAdjektiveNeu.length)]),
            adjektivAlt: (sikAdjektiveAlt[Math.floor(Math.random() * sikAdjektiveAlt.length)]),
            kunde: (sikKunde[Math.floor(Math.random() * sikKunde.length)]),
            substantivAlt: (sikSubstantiveAlt[Math.floor(Math.random() * sikSubstantiveAlt.length)])
        })
    }

    handleClick = () => {
        return PhraseGenerator()
      }

    render() {
        return (
            <div>
                <div class="container">
                <h1 class="col text-center">The Investor Pitch 101</h1>
                <div class="row">
                    {this.state.kunde == "" ? <h2 class="alert alert-secondary" role="alert">Ey Julian, uns geht das Geld aus. Wir brauchen bis heute EOB einen Investoren-Pitch! Der muss 1a aligned und Investor-ready sein!! Wir brauchen ein paar game-changer Sätze von Dir, damit das Term Sheet sofort unterschrieben wird!</h2> : <h2 class="alert alert-secondary" role="alert">{this.state.wir} {this.state.verb} {this.state.adjektivNeu1} {this.state.substantiv1} {this.state.und} {this.state.adjektivNeu2} {this.state.substantiv2} {this.state.anstattVon} {this.state.adjektivAlt} {this.state.substantivAlt} {this.state.kunde}{this.state.punkt}</h2>} 
                </div>
                <div className="col text-center mt-1">
                <button type="button" class="btn btn-success button" onClick={() => this.PhraseGenerator()}>Komm ins Doing!</button>
                </div>
                </div>
            </div>
            
        )
    }
}

export default PhraseGenerator
