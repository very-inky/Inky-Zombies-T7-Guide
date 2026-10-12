window.INKY_PERKS = [
  {
    name: 'Juggernog',
    type: 'stock',
    summary: 'Raises your maximum health immediately and keeps adding health as you survive new rounds.',
    detail: `<p>Grants <strong>+70 maximum HP</strong>, taking a fresh 130-HP player to 200. Each new round begun while you hold Juggernog adds another <strong>3 maximum HP</strong>. Earlier rounds are not backfilled.</p><p>Losing the perk, going down or dying resets its earned round bonus. With Nitrogen Cooled, the immediate +70 bonus is withheld, but the round-by-round growth remains.</p>`
  },
  {
    name: 'Quick Revive',
    type: 'stock',
    summary: 'Keeps its usual revive benefits and helps you recover health quickly after taking damage.',
    detail: `<p>In addition to the map's normal Quick Revive behavior, restores <strong>20 HP every 0.1 seconds</strong> after <strong>1.8 seconds</strong> without damage.</p><p>Recovery stops at your current maximum HP. It cannot restore maximum health lost to a blessing.</p>`
  },
  {
    name: 'Speed Cola',
    type: 'stock',
    summary: 'Speeds up reloads, weapon handling, equipment use and crafting.',
    detail: `<p>Faster reloads are joined by faster weapon swaps, aiming, grenade throws, equipment use and melee recovery.</p><p>Supported crafting interactions take <strong>31% of their normal time</strong>, with a minimum of <strong>0.25 seconds</strong>.</p>`
  },
  {
    name: 'Double Tap II',
    type: 'stock',
    summary: 'Improves your gunfire and enables the ground slam after you unlock Exo movement.',
    detail: `<p>Retains Double Tap II's native gun benefits, with additional penetration support where the weapon and map allow it.</p><p>After the <strong>2,000-personal-kill Exo unlock</strong>, holding Double Tap lets you press Crouch after an Exo jump to perform a ground slam. The total damage increase still depends on the weapon.</p>`
  },
  {
    name: 'Stamin-Up',
    type: 'stock',
    summary: 'Adds movement speed and removes the movement penalty while aiming.',
    detail: `<p>Sets the normal movement multiplier to <strong>1.05×</strong> and removes the usual slowdown while aiming down sights.</p><p>Unlimited sprint is already available to everyone. Speed Cola supplies the faster transition into aiming.</p>`
  },
  {
    name: 'Deadshot Daiquiri',
    type: 'stock',
    summary: 'Doubles eligible bullet damage to the head, helmet and neck.',
    detail: `<p>Eligible head, helmet and neck hits deal <strong>2× damage</strong>.</p><p>A short <strong>10-millisecond</strong> interval separates awarded bonuses, so simultaneous pellets do not all receive the bonus. Elemental Overcharge damage is unaffected.</p>`
  },
  {
    name: 'Mule Kick',
    type: 'stock',
    summary: 'Adds 25% to eligible damage instead of increasing your baseline three-weapon capacity.',
    detail: `<p>Grants <strong>1.25× eligible damage</strong>. Everyone already has three primary weapon slots; Mule Kick does not grant a fourth.</p><p>The bonus does not apply to Elemental Overcharge or Ethereal Razor's health-based slash. Some special enemies, including flying parasites and spiders, use different damage rules and do not receive this general bonus.</p>`
  },
  {
    name: 'Electric Cherry',
    type: 'stock',
    summary: 'Reloading shocks nearby zombies.',
    detail: `<p>Retains the map's native Electric Cherry reload shock.</p><p>Availability and the exact shock behavior depend on the map's support for the perk.</p>`
  },
  {
    name: 'PhD Flopper',
    type: 'inky',
    summary: 'Protects you from explosive and fall damage while adding rechargeable slide blasts.',
    detail: `<p>Starts with <strong>two slide-blast charges</strong>. Receiving an eligible enemy hit restores one charge, up to two; dealing damage does not recharge it. Slide blasts spend a charge, while dive blasts are free.</p><ul><li><strong>Slide:</strong> center damage 1,500 + 100 × round; edge damage 500 + 30 × round; radius 100 + 3 × round.</li><li><strong>Dive:</strong> center damage 5,000 + 200 × round; edge damage 1,000 + 50 × round; radius 300 + 5 × round.</li></ul><p>If you had PhD when downed, press <strong>Aim + Fire</strong> while down to drop a nuke, once for that down. Obtain PhD through Inky's random perk purchases and rewards.</p>`
  },
  {
    name: 'Tombstone',
    type: 'inky',
    summary: 'Leaves a recoverable marker containing your primary weapons, ammo and perks when you go down.',
    detail: `<p>Return to your glowing marker while alive and upright, within <strong>64 units</strong>, to recover your saved loadout. Only you can reclaim your marker. It works in solo as well as co-op.</p><p><strong>Co-op sacrifice:</strong> while downed with your marker active and another living, upright teammate, release <strong>Use / Interact</strong>, then hold it for <strong>1.5 seconds</strong> to give up this life. Release early to cancel. Sacrifice is unavailable while you are being revived or when no teammate is standing. It follows normal death and round-based respawn timing; it does not respawn you immediately.</p><p><strong>Solo never offers sacrifice.</strong> Tombstone recovery and solo Quick Revive keep their normal behavior.</p><p>The marker expires when the <strong>next full round ends</strong>: a marker created in round 14 disappears when round 16 starts. Sacrificing does not extend that deadline. Tombstone itself is not restored, and equipment is not included in the saved loadout. Restoring perks does not trigger extra perk rewards.</p><p>Available through Inky's random perk purchases and rewards.</p>`
  },
  {
    name: 'Ethereal Razor',
    type: 'inky',
    summary: 'Adds a close-range area slash to melee attacks and heals you when it connects.',
    detail: `<p>Each swing reaches nearby enemies within <strong>70 units</strong>. Against ordinary zombies, the slash is lethal before round 10 or during Insta-Kill; otherwise it deals <strong>half their current HP</strong>.</p><p>The separate area slash awards <strong>100 points per kill</strong>, or <strong>140 with Pickpocket</strong>; a nonlethal slash pays 10 per affected enemy. The personal 100-headshot Double Points reward doubles these awards; the temporary pickup does not. Direct melee-contact kills use ordinary melee payouts. See <a href="#economy">Points &amp; upgrades</a> for the full earnings table.</p><p>A connected swing starts <strong>10 healing ticks of 10 HP</strong>, 0.1 seconds apart, capped by your maximum health. This separate slash does not gain the usual kill, EC or perk damage bonuses, and special enemies retain their own damage protections.</p><p>Available through Inky's random perk purchases and rewards.</p>`
  },
  {
    name: 'Ammo Regen',
    type: 'inky',
    summary: 'Gradually replenishes gun ammunition and grenade supplies.',
    detail: `<ul><li><strong>Reserves:</strong> 30 rounds for each primary weapon every 30 seconds, up to its reserve limit.</li><li><strong>Held gun:</strong> one magazine round every 2 seconds, up to its base magazine size.</li><li><strong>Grenades:</strong> one lethal and one tactical every 30 seconds, up to 8 lethals and 6 tacticals.</li></ul><p>Holding out a placeable mine does not regenerate mines. Available through Inky's random perk purchases and rewards.</p>`
  },
  {
    name: 'Dying Wish',
    type: 'inky',
    summary: 'Saves you from a lethal hit while ready, then needs time to recharge.',
    detail: `<p>A lethal hit triggers <strong>4 seconds of protection</strong>. Enemies ignore you for the first <strong>1.5 seconds</strong>, then can target you again before protection ends. You leave the effect with <strong>35 HP</strong>.</p><p>The first cooldown is <strong>180 seconds</strong>. Each later activation adds 60 seconds, up to a 480-second cooldown. Losing and reacquiring the perk does not reset that cooldown.</p><p>Available through Inky's random perk purchases and rewards.</p>`
  },
  {
    name: "Widow's Wine",
    type: 'inky',
    summary: 'Spends a grenade to web nearby attackers, while thrown stickies web a larger area.',
    detail: `<p>An eligible enemy hit releases webs within <strong>150 units</strong>, costing <strong>one lethal grenade</strong> when the burst succeeds. Thrown web grenades cover <strong>210 units</strong>.</p><p>Webs deal <strong>three ticks of 150 damage</strong>, one second apart, and slow affected zombies to a walk for <strong>15 seconds</strong>. Another application refreshes the slow without stacking simultaneous web-damage effects.</p><p>This replaces the normal Widow's Wine. Supported Widow machines cost <strong>4,000 points</strong>; it can also come from supported Wunderfizz rolls and Inky perk rewards.</p>`
  },
  {
    name: 'Burn Heart',
    type: 'inky',
    summary: 'Makes your frags, web stickies and supported mines leave fire pools while protecting you from fire.',
    detail: `<p>Pools last <strong>6 seconds</strong> with a <strong>110-unit radius</strong>. Every <strong>0.5 seconds</strong>, their zombie damage starts at <strong>4% of maximum HP</strong>, with a minimum of 10. Zombies in the pool or still burning take <strong>1.5× ordinary damage</strong>; other damage bonuses can also affect the pool's ticks. Pools do not damage Panzers or Margwas.</p><p>You can maintain <strong>two pools</strong>, with six shared across the lobby. Players without Burn Heart take up to <strong>15 HP per tick</strong>, stopping at 1 HP. Your fire immunity does not protect against out-of-bounds or other lethal map barriers.</p><p>Available through Inky's random perk purchases and rewards. The fire pool and the explosive that created it are separate damage effects.</p>`
  },
  {
    name: 'Danger Close',
    type: 'inky',
    summary: 'Makes eligible explosives scale with the health of the enemies they hit.',
    detail: `<p>Ordinary explosive hits against zombies gain damage equal to <strong>20% of the victim's maximum HP</strong>. Placeable-mine blasts instead have a minimum of <strong>one-third of maximum HP + 55 damage</strong>.</p><p><strong>Explosive Bullets uses a smaller 2%-maximum-HP addition</strong>, applied after its damage multipliers. Danger Close also extends that perk's blast radius from <strong>115 to 150 units</strong>. The 2% is an addition, not a cap on the whole blast.</p><p>The ordinary bonus excludes the Ray Gun Mark II family. It can strengthen PhD blasts, but does not multiply Elemental Overcharge damage or bypass a boss's damage protections.</p><p>Available through Inky's random perk purchases and rewards.</p>`
  },
  {
    name: 'Magnet',
    type: 'inky',
    summary: 'Draws nearby powerups toward you.',
    detail: `<p>Attracts powerups within <strong>256 units</strong>, moving them 15 units every 0.1 seconds until they are within 16 units of you.</p><p>Available through Inky's random perk purchases and rewards.</p>`
  },
  {
    name: 'Explosive Bullets',
    type: 'inky',
    summary: 'Gives eligible bullet hits a chance to explode and damage nearby enemies.',
    detail: `<p>Each eligible hit has a <strong>6% chance</strong> to produce a blast after 0.05 seconds. Its radius is <strong>115 units</strong>, or <strong>150 with Danger Close</strong>. Shotgun spread weapons are excluded.</p><p>Center damage starts at <strong>30% of the triggering bullet's damage before Inky's damage bonuses</strong>, falling to 1 at the edge before blast bonuses. The hit location still affects that starting damage. The blast then receives applicable kill-reward/EC, fire and Mule Kick bonuses once, without inheriting the shot's amplified total. Danger Close adds <strong>2% of each victim's maximum HP afterward</strong>; that addition receives no further damage multipliers from these perks and rewards.</p><p>Its own splash can hurt you, but is capped at <strong>20 HP</strong> and cannot reduce you below 1 HP. PhD prevents that splash. This protection does not make ordinary grenades safe.</p><p>Available through Inky's random perk purchases and rewards.</p>`
  }
];
