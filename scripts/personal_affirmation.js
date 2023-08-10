async function _handleGanbareSkill(event) {
  const text = event.value;
  console.log("personal affirmation:", text)

  //Call the TTS Model 
  window.hooks.emit('moemate_core:handle_skill_text', event)
  window.companion.Interrupt();
}

async function _handleComfortSkill(event) {
  const text = event.value;
  console.log("personal affirmation:", text)

  //Call the TTS Model 
  window.hooks.emit('moemate_core:handle_skill_text', event)
  window.companion.Interrupt();
}

export function init() {
  window.hooks.on("personal_affirmation:handle_ganbare_skill", (event) => _handleGanbareSkill(event));
  window.hooks.on("personal_affirmation:handle_comfort_skill", (event) => _handleComfortSkill(event));
}