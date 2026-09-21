/**
 * acatnon FPS Kit - Multilingual & Interactive Controller
 * Supports English (Default) and Thai with instant language switching.
 */

const translations = {
  en: {
    page_title: "acatnon FPS Kit – Documentation & Manual",
    lang_btn: "🌐︎ TH",
    nav_overview: "Overview",
    nav_base: "1. Base FPS",
    nav_move: "2. Movement",
    nav_visual: "3. Visual System",
    nav_pickup: "4. Pick up & Interaction",
    nav_extra: "5. Extra System",
    nav_principles: "Principles",
    nav_setup: "Setup",
    nav_controls: "Controls",

    hero_title: "acatnon FPS Kit – Documentation Manual",
    hero_desc: "A complete modular C# asset kit and gameplay framework for developing FPS games in Unity. Covers core locomotion, decoupled FPS camera, hitscan shooting, procedural gun feel juice, physics item handling, and advanced extra abilities (Grappling Hook, Punch, Ability Switcher, Zoom).",
    badge_unity: "Unity 2022+ / Unity 6 Ready",
    badge_csharp: "C# Source Code Included",
    badge_modules: "5 Modular Packages",

    overview_tag: "Architecture",
    overview_title: "Modular Kit Architecture",
    overview_lead: "All source files and assets are structured into 5 independent modules. Use them individually or combine them into a unified FPS controller.",
    tree_text: `Assets/acatnon/
├── BaseFPSCharacter/        🎮 Core FPS Controller (Walking, FPS Camera, Raycast Shooting)
├── Movement Expansion/      ⚡ Advanced Locomotion (Double Jump, Slide, Wall Run & Jump)
├── Visual System/           💥 Juice & Weapon Feedback (Recoil, Muzzle Flash, Decal, Audio)
├── Pick up and Interaction/ 📦 Physics Item Handling (Pick up, Drop, Carry Object)
└── Extra System/            🛠️ Extended Abilities (Ability Switcher, Grapple, Punch, Zoom, Gun Rotation)`,

    card_base_tag: "Module 1",
    card_base_title: "Base FPS Character",
    card_base_desc: "Physics-based character driven by Rigidbody, decoupled mouse look camera, and hitscan raycast shooting.",

    card_move_tag: "Module 2",
    card_move_title: "Movement Expansion",
    card_move_desc: "Enhances locomotion with smooth crouch slides, air double jumps, and wall running/jumping.",

    card_visual_tag: "Module 3",
    card_visual_title: "Visual System",
    card_visual_desc: "Procedural math-based weapon recoil, muzzle flashes, surface-aligning bullet decals, and randomized sound pitch.",

    card_pickup_tag: "Module 4",
    card_pickup_title: "Pick up & Interaction",
    card_pickup_desc: "Object interaction detection, E key to hold/drop, automatic physics handling, and player collision ignore.",

    card_extra_tag: "Module 5",
    card_extra_title: "Extra System",
    card_extra_desc: "Grappling hook mechanics with SpringJoint, melee punch combat, dynamic weapon slot switching, and smooth camera FOV zoom.",

    base_tag: "Module 1",
    base_title: "1. Base FPS Character",
    base_lead: "Foundation for first-person player controller. Source code located at Assets/Codes/Base/",

    card_prefabs_title: "📦 Prefabs",
    card_prefabs_desc: "<code>Player.prefab</code> – Complete character prefab with Rigidbody, camera, and shooter.",
    card_materials_title: "🎨 Materials",
    card_materials_desc: "<code>Player.mat</code>, <code>Ground.mat</code>, <code>Enemy.mat</code>",
    card_preview_title: "🎬 Preview Scene",
    card_preview_desc: "<code>Preview Scene.unity</code> – Ready-to-play test arena with targets.",

    camera_badge: "Mouse Look Controller",
    camera_desc: "Controls first-person mouse look with automatic cursor locking/hiding and pitch clamping.",
    camera_f1_title: "Decoupled Axes:",
    camera_f1_desc: "Mouse X rotates player body (Yaw); Mouse Y rotates only <code>cameraHolder</code> (Pitch).",
    camera_f2_title: "Pitch Clamping:",
    camera_f2_desc: "Prevents camera flipping with <code>maxLookAngle</code> (default 90°).",
    camera_f3_title: "Customization:",
    camera_f3_desc: "Adjust <code>mouseSensitivity</code> and flip axes with <code>invertY</code>.",
    view_code_camera: "📜 View C# Code : SimpleFPSCamera.cs",

    move_badge: "Physics Movement Engine",
    move_desc: "Walk, sprint, and jump mechanics using <code>AddForce(..., ForceMode.VelocityChange)</code> in <code>FixedUpdate</code>.",
    move_f1_title: "Ground Check:",
    move_f1_desc: "Raycast detection at distance <code>groundDistance</code> targeting <code>groundMask</code>.",
    move_f2_title: "Extra Gravity Fall:",
    move_f2_desc: "Amplified gravity multiplier <code>gravityMultiplier</code> when falling for punchy landings.",
    move_f3_title: "Dynamic Drag:",
    move_f3_desc: "Automatic damping switch: <code>groundDrag</code> on floor, <code>airDrag</code> and <code>airControl</code> in mid-air.",
    view_code_movement: "📜 View C# Code : SimpleMovement.cs",

    shoot_badge: "Hitscan Shooting",
    shoot_desc: "Basic hitscan shooting mechanics casting rays from viewport center to target layers.",
    shoot_f1_title: "Viewport Raycast:",
    shoot_f1_desc: "Ray originates from screen center <code>(0.5, 0.5, 0)</code> up to <code>shootRange</code>.",
    shoot_f2_title: "Hit Detection:",
    shoot_f2_desc: "Filters objects belonging to <code>hitLayers</code> to trigger instant hit feedback.",
    view_code_shooting: "📜 View C# Code : SimpleShooting.cs",

    expansion_tag: "Module 2",
    expansion_title: "2. Movement Expansion",
    expansion_lead: "High-mobility Action FPS mechanics including Double Jump, Slide Boost, Wall Run, and Wall Jump.",
    extra_badge: "Advanced Locomotion",
    extra_desc: "Handles all advanced movement states with automated state suspension to avoid physics conflicts with the base controller.",

    coexist_title: "🔄 Coexistence (Zero Conflict)",
    coexist_desc: "Assign <code>SimpleMovement</code> to <code>movementScriptToSuspend</code> to automatically disable standard walking during slides or wall runs.",
    dj_title: "🦘 Double Jump",
    dj_desc: "Perform mid-air jumps up to <code>maxAirJumps</code>. Y-axis velocity is reset to 0 before applying force for consistent jump heights.",
    slide_title: "🛹 Slide & Ceiling Check",
    slide_desc: "Press Left Shift while running to boost forward with <code>slideBoost</code>. Reduces collider height to 60% and uses SphereCast to check ceiling clearance before standing.",
    wall_title: "🧗 Wall Run & Wall Jump",
    wall_desc: "Stick to surfaces with surface normals between 70°–110°. Clamps downward falling speed with <code>wallRunFallClamp</code> and press Space to kick off.",
    view_code_extra: "📜 View C# Code : ExtraMovement.cs",

    visual_tag: "Module 3",
    visual_title: "3. Visual System (Juice & Gun Feel)",
    visual_lead: "Enhances shooting feel with procedural recoil mathematics, muzzle flashes, particle impacts, and surface-parented bullet decals.",
    gunfeel_badge: "Juice & Weapon Feedback",
    gunfeel_desc: "Controls procedural rotational/positional kickback, muzzle flash instancing, decal placement with normal offset, and dynamic audio pitch variation.",
    gunfeel_f1_title: "Dual-Lerp Recoil:",
    gunfeel_f1_desc: "Kicks angular <code>kickAngle</code> and positional <code>kickBackDistance</code>. Snaps via <code>snappiness</code> and recovers via <code>recoverySpeed</code>.",
    gunfeel_f2_title: "Pitch Randomization:",
    gunfeel_f2_desc: "Randomizes audio pitch between <code>minPitch</code> and <code>maxPitch</code> on each shot to avoid repetitive audio fatigue.",
    gunfeel_f3_title: "Muzzle Flash & Particles:",
    gunfeel_f3_desc: "Instantiates at <code>muzzlePoint</code> and auto-destroys based on configured lifetimes.",
    gunfeel_f4_title: "Decal Placement:",
    gunfeel_f4_desc: "Aligns decal to surface normal with offset to prevent Z-fighting; supports reparenting to moving targets.",
    view_code_gunfeel: "📜 View C# Code : GunFeel.cs",

    pickup_tag: "Module 4",
    pickup_title: "4. Pick up & Interaction",
    pickup_lead: "Comprehensive object interaction system for picking up, carrying, and dropping physics objects with custom Inspector tools.",
    card_holder_title: "🤲 Pickup Holder",
    card_holder_desc: "Attached to player or hand hold point. Listens for interact input (E key) and manages held items.",
    card_item_title: "📦 Pickup Item",
    card_item_desc: "Attached to interactable scene objects. Switches Rigidbody to kinematic while held and restores physics on release.",
    card_editor_title: "🛠️ Custom Editor",
    card_editor_desc: "<code>PlayerInteractEditor.cs</code> provides clean foldouts in Unity Inspector for range, layer mask, and UI prompt customization.",

    holder_badge: "Holder Controller",
    holder_desc: "Manages player item holding state, detects interact input (E key) supporting both New Input System and Legacy Input Manager.",
    holder_f1_title: "Multi-Input Support:",
    holder_f1_desc: "Automatically checks key input for both <code>UnityEngine.InputSystem</code> and <code>Input.GetKeyDown</code>.",
    holder_f2_title: "Frame Guard:",
    holder_f2_desc: "Prevents accidental same-frame pickup/drop loops using <code>_lastPickupFrame</code> and <code>_lastDropFrame</code>.",
    holder_f3_title: "Auto Drop on Disable:",
    holder_f3_desc: "Safely releases the held item if the player or holder component is disabled.",
    view_code_holder: "📜 View C# Code : PickupHolder.cs",

    item_badge: "Interactable Item Component",
    item_desc: "Component for interactable objects (requires Rigidbody). Handles parent attachment, disables gravity, ignores player collision, and restores state on drop.",
    item_f1_title: "Collision Ignore:",
    item_f1_desc: "Applies <code>Physics.IgnoreCollision</code> between item and player colliders to prevent physics jitter or self-launching.",
    item_f2_title: "Transform Parenting:",
    item_f2_desc: "Parents item to holder with zeroed local coordinates and sets <code>isKinematic = true</code>.",
    item_f3_title: "Interaction Prompt:",
    item_f3_desc: "Built-in UI prompt texts (<code>\"Press E to pick up\"</code> / <code>\"Press E to drop\"</code>) ready for UI display.",
    view_code_item: "📜 View C# Code : PickupItem.cs",

    editor_badge: "Custom Unity Editor",
    editor_desc: "Custom Inspector Editor for <code>PlayerInteraction</code> organizing raycast range, SphereCast radius for third-person mode, and reference properties.",
    editor_f1_title: "Foldout Header Groups:",
    editor_f1_desc: "Neatly separates Interaction Settings, UI, and References into collapsibles.",
    editor_f2_title: "Conditional Fields:",
    editor_f2_desc: "Dynamically displays <code>SphereCastRadius</code> only when Third Person mode is selected.",
    view_code_editor: "📜 View C# Code : PlayerInteractEditor.cs",

    // Module 5: Extra System
    extra_system_tag: "Module 5",
    extra_system_title: "5. Extra System (Abilities & Utilities)",
    extra_system_lead: "Advanced abilities including dynamic SpringJoint grappling hook, melee punch combat, ability slot switching, gun orientation aiming, and camera zoom.",
    card_ability_title: "🔢 Ability Switcher",
    card_ability_desc: "Switches weapon/ability slots (1: Shooting, 2: Grapple, 3: Punch) with number keys.",
    card_grapple_title: "🪝 Grappling Hook",
    card_grapple_desc: "SpringJoint physics grappling hook with LineRenderer rope rendering and distance clamping.",
    card_punch_title: "🥊 Melee Punch",
    card_punch_desc: "First-person punch attack dealing damage to enemies with receiver hit callbacks.",
    card_zoom_title: "🔍 Camera Zoom",
    card_zoom_desc: "Smooth FOV interpolation on right-click hold for aiming and scope magnification.",

    switcher_badge: "Ability Management",
    switcher_desc: "Centrally activates and toggles ability components (SimpleShooting, Grapplinghook, FpsPunch) across slot indices 1, 2, and 3.",
    switcher_f1_title: "Slot Keybinds:",
    switcher_f1_desc: "Press <code>1</code> for Shooting, <code>2</code> for Grappling Hook, and <code>3</code> for Melee Punch.",
    switcher_f2_title: "Scene Auto-Discovery:",
    switcher_f2_desc: "Uses <code>Object.FindObjectsByType</code> including inactive objects to index all abilities automatically on Awake.",
    view_code_switcher: "📜 View C# Code : AbilitySwitcher.cs",

    grapple_badge: "Physics Locomotion",
    grapple_desc: "Fires a grappling hook toward surfaces on the <code>whatIsGrappleable</code> layer, dynamically creating a SpringJoint on the player.",
    grapple_f1_title: "Dynamic SpringJoint:",
    grapple_f1_desc: "Attaches a configurable spring joint with adjustable <code>spring</code>, <code>damper</code>, and <code>massScale</code>.",
    grapple_f2_title: "Distance Bounds:",
    grapple_f2_desc: "Clamps grapple length between <code>minDistanceMultiplier</code> and <code>maxDistanceMultiplier</code> for pendulum swinging.",
    grapple_f3_title: "Rope Rendering:",
    grapple_f3_desc: "Draws a 2-point line via <code>LineRenderer</code> in <code>LateUpdate</code> from <code>gunTip</code> to anchor point.",
    view_code_grapple: "📜 View C# Code : Grappling hook.cs",

    rotategun_badge: "Visual Alignment",
    rotategun_desc: "Smoothly rotates and aims the weapon toward the active grapple anchor point while grappling, returning to parent rotation when released.",
    rotategun_f1_title: "LookRotation Tracking:",
    rotategun_f1_desc: "Calculates <code>Quaternion.LookRotation</code> towards the active grapple point.",
    rotategun_f2_title: "Smooth Slerp/Lerp:",
    rotategun_f2_desc: "Blends rotation smoothly at <code>rotationSpeed</code> for realistic weapon handling.",
    view_code_rotategun: "📜 View C# Code : RotateGun.cs",

    punch_badge: "Melee Combat",
    punch_desc: "Executes a short-range raycast punch forward from the camera center, triggering hit events and applying damage.",
    punch_f1_title: "Raycast Range:",
    punch_f1_desc: "Casts a ray up to <code>_punchRange</code> (default 2m) against <code>_hittableLayers</code>.",
    punch_f2_title: "Damage & Health Hook:",
    punch_f2_desc: "Notifies <code>EnemyPunchReceiver</code> and deducts damage via <code>Health.TakeHit(_damage)</code>.",
    view_code_punch: "📜 View C# Code : FpsPunch.cs",

    enemypunch_badge: "Damage Receiver",
    enemypunch_desc: "Interface component attached to enemy characters and props to receive punch impact events.",
    enemypunch_f1_title: "Event Callback:",
    enemypunch_f1_desc: "Executes <code>ReceivePunch(GameObject attacker)</code> logging the punch source.",
    view_code_enemypunch: "📜 View C# Code : EnemyPunch.cs",

    zoom_badge: "Camera Utility",
    zoom_desc: "Smoothly interpolates camera field-of-view (FOV) when holding the Right Mouse Button.",
    zoom_f1_title: "FOV Interpolation:",
    zoom_f1_desc: "Lerps <code>camera.fieldOfView</code> between <code>normalFOV</code> and <code>zoomFOV</code> at <code>zoomSpeed</code>.",
    zoom_f2_title: "Instant Return:",
    zoom_f2_desc: "Releases back to standard FOV immediately upon letting go of Right Click.",
    view_code_zoom: "📜 View C# Code : ZoomCamera.cs",

    principles_tag: "Engineering",
    principles_title: "In-Depth Engineering Principles",
    principles_lead: "Design philosophy and mathematical mechanics behind the kit's architecture.",
    principle_1_title: "1. Velocity-Change Physics Locomotion",
    principle_1_desc: "Instead of manipulating raw Transform coordinates, the system calculates delta velocity <code>delta = targetVelocity - rb.linearVelocity</code> and applies <code>ForceMode.VelocityChange</code>. This eliminates sliding and floatiness while fully preserving external physics forces and collisions.",
    principle_2_title: "2. State Suspension (Zero Conflict)",
    principle_2_desc: "When entering a slide or wall run, <code>ExtraMovement</code> temporarily disables <code>SimpleMovement.enabled = false</code> to prevent base walking forces from interfering. Upon exiting or standing up, base movement is seamlessly restored.",
    principle_3_title: "3. Dual-Lerp Procedural Recoil",
    principle_3_desc: "Weapon recoil avoids rigid baked animations by utilizing a 2-stage Lerp: the first layer snaps the gun to target offsets using <code>snappiness</code>, while the second layer pulls target offsets back to zero using <code>recoverySpeed</code>.",
    principle_4_title: "4. Physics Handoff & Ignore Collision",
    principle_4_desc: "Upon pickup, original <code>useGravity</code> and <code>isKinematic</code> states are preserved before setting <code>isKinematic = true</code>. <code>Physics.IgnoreCollision</code> is executed with player colliders to prevent physics jitter, and all states are restored upon drop.",
    principle_5_title: "5. Dynamic SpringJoint Grapple Physics",
    principle_5_desc: "The Grappling Hook instantiates a runtime <code>SpringJoint</code> on the player connected to the hit anchor point, utilizing Unity's physics engine to calculate realistic pendulum swings and tension damping without hardcoded trajectories.",

    setup_tag: "Guide",
    setup_title: "Installation & Setup Guide",
    setup_lead: "Step-by-step instructions for importing modules and setting up Unity Tags & Layers.",
    step_1_title: "Configure Layers in Unity",
    step_1_p1: "Go to <b>Edit &gt; Project Settings &gt; Tags and Layers</b> and add the following layers:",
    step_1_li1: "<code>Ground</code> – For walkable floors and jump surfaces.",
    step_1_li2: "<code>Enemy</code> – For targets and shootable damage receivers.",
    step_1_li3: "<code>Wall</code> – For wall-runnable vertical surfaces.",
    step_1_li4: "<code>Grappleable</code> (Optional) – For surfaces that can be grappled.",
    step_2_title: "Place Prefabs in Scene",
    step_2_base: "<strong>Base Setup:</strong> Drag <code>BaseFPSCharacter/Assets/Prefabs/Player.prefab</code> into your Hierarchy, then set <code>Ground Mask = Ground</code> and <code>Hit Layers = Enemy, Default</code>.",
    step_2_variant: "<strong>Full Character Variant:</strong> Drag <code>Visual System/Assets/Prefabs/Player Variant.prefab</code> and verify Inspector settings:",
    step_2_vli1: "<code>SimpleMovement</code>: Ground Mask = <code>Ground</code>",
    step_2_vli2: "<code>ExtraMovement</code>: Ground Mask = <code>Ground</code>, Wall Mask = <code>Wall</code>, drag the <code>SimpleMovement</code> component into <b>Movement Script To Suspend</b>.",
    step_2_vli3: "<code>GunFeel</code>: Hit Layers = <code>Ground, Enemy, Default</code>",
    step_3_title: "Setup Pick up & Interaction",
    step_3_desc: "Create an Empty GameObject under the player camera named <code>HoldPoint</code> and attach <code>PickupHolder.cs</code>. For interactable scene props, attach <code>PickupItem.cs</code> and a <code>Rigidbody</code>.",
    step_4_title: "Setup Extra System (Grapple, Punch & Abilities)",
    step_4_desc: "Attach <code>AbilitySwitcher.cs</code> to the Player root. Add <code>Grapplinghook.cs</code> (with a <code>LineRenderer</code>) and <code>FpsPunch.cs</code> to your ability objects. Add <code>EnemyPunchReceiver.cs</code> to punchable enemy prefabs.",
    step_5_title: "Press Play to Test",
    step_5_desc: "You can immediately test everything in <code>Preview Scene.unity</code>.",
    notice_text: "<strong>⚠️ Physics Tip:</strong> If sliding or wall running feels unresponsive or sticky, verify that <code>SimpleMovement</code> is assigned to the <code>Movement Script To Suspend</code> field in <code>ExtraMovement</code>.",

    controls_tag: "Keybinds",
    controls_title: "Complete Controls & Keybinds",
    controls_lead: "Key mappings and operational conditions for each system module.",
    th_action: "Action",
    th_key: "Keybind",
    th_cond: "Condition & State",
    th_mod: "Module",

    row1_action: "Move Forward / Backward / Left / Right",
    row1_cond: "All states",
    row2_action: "Look & Aim (Mouse Look)",
    row2_cond: "Cursor locked",
    row3_action: "Standard Jump",
    row3_cond: "While grounded",
    row4_action: "Double Jump (Air Jump)",
    row4_cond: "While airborne",
    row5_action: "Slide (Boost Slide)",
    row5_cond: "While running on ground (speed > Min Speed)",
    row6_action: "Wall Run (Stick to Wall)",
    row6_key: "<kbd>W</kbd> + Contact Wall",
    row6_cond: "Airborne collision with Wall layer",
    row7_action: "Wall Jump (Kick Off)",
    row7_cond: "While wall running",
    row8_action: "Shoot (with Recoil & Effects)",
    row8_key: "<kbd>Left Click (Fire1)</kbd>",
    row8_cond: "Slot 1 active (Gun Shooting)",
    row9_action: "Pick up / Drop Item",
    row9_cond: "Aim at interactable item or press while holding",
    row10_action: "Switch Ability Slots",
    row10_key: "<kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd>",
    row10_cond: "1: Shoot | 2: Grapple | 3: Punch",
    row11_action: "Grapple Hook (Swing & Pull)",
    row11_key: "<kbd>Left Click (Hold)</kbd>",
    row11_cond: "Slot 2 active (Aimed at Grappleable surface)",
    row12_action: "Melee Punch",
    row12_key: "<kbd>Left Click</kbd>",
    row12_cond: "Slot 3 active (Punch Range < 2m)",
    row13_action: "Camera Zoom (Aim Down Sight)",
    row13_key: "<kbd>Right Click (Hold)</kbd>",
    row13_cond: "Any slot (ZoomCamera attached)",

    footer_title: "<strong>acatnon FPS Kit</strong> – Unity Modular FPS & Interaction Framework",
    footer_sub: "Designed for clean integration and high-performance gameplay.",
    copy_btn_text: "Copy Code",
    copied_btn_text: "Copied! ✓"
  },

  th: {
    page_title: "acatnon FPS Kit – คู่มือการใช้งาน",
    lang_btn: "🌐︎ EN",
    nav_overview: "ภาพรวม",
    nav_base: "1. Base FPS",
    nav_move: "2. Movement",
    nav_visual: "3. Visual System",
    nav_pickup: "4. Pick up & Interaction",
    nav_extra: "5. Extra System",
    nav_principles: "หลักการทำงาน",
    nav_setup: "วิธีติดตั้ง",
    nav_controls: "ปุ่มควบคุม",

    hero_title: "acatnon FPS Kit – คู่มือการใช้งาน",
    hero_desc: "ชุด Asset และระบบสคริปต์ C# สมบูรณ์แบบสำหรับพัฒนาเกม FPS ใน Unity ครอบคลุมตั้งแต่ระบบการเคลื่อนไหวพื้นฐาน กล้อง การยิง Hitscan แอนิเมชันแรงถีบ Gun Feel ระบบหยิบจับวัตถุ (Pick up & Interaction) ไปจนถึงความสามารถเสริมขั้นสูง (Grappling Hook, ต่อยมวย Punch, สลับสกิล, และกล้องซูม)",
    badge_unity: "Unity 2022+ / Unity 6 Ready",
    badge_csharp: "C# Source Code Included",
    badge_modules: "5 Modular Packages",

    overview_tag: "Architecture",
    overview_title: "ภาพรวมโครงสร้างของชุดเครื่องมือ",
    overview_lead: "ไฟล์โค้ดและ Asset ถูกจัดแบ่งออกเป็น 5 โมดูลหลัก สามารถเลือกหยิบไปใช้งานแบบแยกชิ้น หรือเชื่อมต่อเข้าด้วยกันแบบครบชุดได้ทันที",
    tree_text: `Assets/acatnon/
├── BaseFPSCharacter/        🎮 ระบบตัวละครพื้นฐาน (การเดิน, กล้อง FPS, การยิง Raycast)
├── Movement Expansion/      ⚡ การเคลื่อนไหวขั้นสูง (Double Jump, Slide, Wall Run & Jump)
├── Visual System/           💥 ระบบ Juice & Gun Feel (Recoil, Muzzle Flash, Decal, เสียงปืน)
├── Pick up and Interaction/ 📦 ระบบหยิบจับและตอบสนองกับวัตถุ (Pick up, Drop, Carry Object)
└── Extra System/            🛠️ ความสามารถเสริม (Ability Switcher, Grapple, ต่อยมวย, ซูมกล้อง, หมุนปืน)`,

    card_base_tag: "Module 1",
    card_base_title: "Base FPS Character",
    card_base_desc: "แกนหลักของตัวละครควบคุมด้วย Rigidbody ฟิสิกส์สมจริง พร้อมกล้องเมาส์อิสระและการยิงแบบ Hitscan",

    card_move_tag: "Module 2",
    card_move_title: "Movement Expansion",
    card_move_desc: "ระบบต่อยอดให้การเคลื่อนไหวลื่นไหล สไลด์หลบสิ่งกีดขวาง กระโดด 2 จังหวะ และวิ่งไต่กำแพง",

    card_visual_tag: "Module 3",
    card_visual_title: "Visual System",
    card_visual_desc: "เอฟเฟกต์การยิง Procedural Recoil, ประกายไฟปากกระบอก, รอยกระสุน Decal ติดตามพื้นผิว และเสียงสุ่ม Pitch",

    card_pickup_tag: "Module 4",
    card_pickup_title: "Pick up & Interaction",
    card_pickup_desc: "ระบบตรวจจับวัตถุ กดปุ่ม E เพื่อหยิบ/วางสิ่งของ ปิดฟิสิกส์ระหว่างถือ และยกเว้นการชนกับตัวผู้เล่นอัตโนมัติ",

    card_extra_tag: "Module 5",
    card_extra_title: "Extra System",
    card_extra_desc: "ระบบสลิงโหน Grappling Hook ฟิสิกส์ SpringJoint, การออกหมัดต่อยระยะประชิด, การสลับสกิล 1-2-3, และกล้องซูม FOV",

    base_tag: "Module 1",
    base_title: "1. Base FPS Character",
    base_lead: "รากฐานการทำงานของตัวละครมุมมองบุคคลที่หนึ่ง โค้ดสคริปต์ทั้งหมดอยู่ที่โฟลเดอร์ Assets/Codes/Base/",

    card_prefabs_title: "📦 Prefabs",
    card_prefabs_desc: "<code>Player.prefab</code> – พรีแฟบตัวละครพร้อม Rigidbody, กล้อง, และตัวยิง",
    card_materials_title: "🎨 Materials",
    card_materials_desc: "<code>Player.mat</code>, <code>Ground.mat</code>, <code>Enemy.mat</code>",
    card_preview_title: "🎬 Preview Scene",
    card_preview_desc: "<code>Preview Scene.unity</code> – ซีนสนามทดสอบพร้อมเป้าหมาย",

    camera_badge: "Mouse Look Controller",
    camera_desc: "ควบคุมมุมมองสายตาด้วยเมาส์ ล็อกและซ่อนเคอร์เซอร์อัตโนมัติเมื่อเริ่มเกม พร้อมระบบจำกัดมุมก้มเงย",
    camera_f1_title: "แยกแกนหมุน:",
    camera_f1_desc: "เมาส์แกน X หมุนตัวละคร (Yaw) ส่วนแกน Y หมุนเฉพาะ <code>cameraHolder</code> (Pitch)",
    camera_f2_title: "Pitch Clamping:",
    camera_f2_desc: "ล็อกองศาก้มเงยไม่ให้กล้องตีลังกาด้วย <code>maxLookAngle</code> (ปกติ 90°)",
    camera_f3_title: "Customization:",
    camera_f3_desc: "ปรับ <code>mouseSensitivity</code> และสลับทิศทางเมาส์ด้วย <code>invertY</code>",
    view_code_camera: "📜 ดูโค้ด C# : SimpleFPSCamera.cs",

    move_badge: "Physics Movement Engine",
    move_desc: "ระบบเดิน วิ่ง กระโดด ด้วยแรงฟิสิกส์ <code>AddForce(..., ForceMode.VelocityChange)</code> ใน <code>FixedUpdate</code>",
    move_f1_title: "Ground Check:",
    move_f1_desc: "ตรวจพื้นด้วย Raycast ระยะ <code>groundDistance</code> ลงไปยัง <code>groundMask</code>",
    move_f2_title: "Extra Gravity Fall:",
    move_f2_desc: "เพิ่มแรงเร่งโน้มถ่วง <code>gravityMultiplier</code> ตอนร่วง ให้จังหวะตกลงพื้นแน่น ไม่ลอย",
    move_f3_title: "Dynamic Drag:",
    move_f3_desc: "สลับแรงต้านอัตโนมัติ บนพื้นใช้ <code>groundDrag</code> กลางอากาศใช้ <code>airDrag</code> และ <code>airControl</code>",
    view_code_movement: "📜 ดูโค้ด C# : SimpleMovement.cs",

    shoot_badge: "Hitscan Shooting",
    shoot_desc: "ระบบยิงแบบ Hitscan ขั้นพื้นฐาน ยิง Raycast จากจุดกึ่งกลางกล้อง (Viewport Center) ไปยังเลเยอร์เป้าหมาย",
    shoot_f1_title: "Viewport Raycast:",
    shoot_f1_desc: "คำนวณรังสีจากจุดกึ่งกลาง <code>(0.5, 0.5, 0)</code> สู่เป้าหมายในระยะ <code>shootRange</code>",
    shoot_f2_title: "Hit Detection:",
    shoot_f2_desc: "กรองเฉพาะวัตถุที่อยู่ใน <code>hitLayers</code> เพื่อรายงานผลการโดนยิงทันที",
    view_code_shooting: "📜 ดูโค้ด C# : SimpleShooting.cs",

    expansion_tag: "Module 2",
    expansion_title: "2. Movement Expansion",
    expansion_lead: "ยกระดับความพริ้วไหวสไตล์ Action FPS ประกอบด้วย Double Jump, Slide พุ่งตัว, Wall Run ไต่กำแพง และ Wall Jump",
    extra_badge: "Advanced Locomotion",
    extra_desc: "ควบคุมระบบการเคลื่อนไหวขั้นสูงทั้งหมด พร้อมระบบ State Suspension ปิดสคริปต์เดินหลักชั่วคราวขณะสไลด์หรือไต่กำแพง",

    coexist_title: "🔄 Coexistence (ไร้ข้อขัดแย้ง)",
    coexist_desc: "ใส่สคริปต์ <code>SimpleMovement</code> ลงในช่อง <code>movementScriptToSuspend</code> เพื่อหยุดฟิสิกส์การเดินชั่วคราวขณะ Slide หรือ Wall Run",
    dj_title: "🦘 Double Jump",
    dj_desc: "กระโดดกลางอากาศได้ตามจำนวน <code>maxAirJumps</code> โดยทำการรีเซ็ตแกน Y เป็น 0 ก่อนใส่แรง เพื่อให้ความสูงคงที่ทุกครั้ง",
    slide_title: "🛹 Slide & Ceiling Check",
    slide_desc: "กด Left Shift ขณะวิ่งเพื่อสไลด์พุ่งด้วย <code>slideBoost</code> ปรับ Collider ลดลงเหลือ 60% และใช้ SphereCast เช็กเพดานก่อนลุกยืน",
    wall_title: "🧗 Wall Run & Wall Jump",
    wall_desc: "วิ่งเกาะกำแพงเมื่อชนมุม Normal 70°–110° ล็อกอัตราการตกลงพื้นด้วย <code>wallRunFallClamp</code> และกด Space เพื่อกระโดดดีดตัวออก",
    view_code_extra: "📜 ดูโค้ด C# : ExtraMovement.cs",

    visual_tag: "Module 3",
    visual_title: "3. Visual System (Juice & Gun Feel)",
    visual_lead: "เติมเต็มอรรถรสในการยิงด้วยระบบ Procedural Recoil ทางคณิตศาสตร์, ประกายไฟปากกระบอก, สะเก็ดกระสุน, และระบบติดรอยกระสุน Decal",
    gunfeel_badge: "Juice & Weapon Feedback",
    gunfeel_desc: "ควบคุมแรงสะบัดของปืนทั้งเชิงมุมและตำแหน่ง พร้อมจัดการ Muzzle Flash, Decal Offset, Particle และเสียงปืนแบบไดนามิก",
    gunfeel_f1_title: "Dual-Lerp Recoil:",
    gunfeel_f1_desc: "ปืนดีดมุม <code>kickAngle</code> และถอยหลัง <code>kickBackDistance</code> ดึงเข้าด้วย <code>snappiness</code> คืนกลับด้วย <code>recoverySpeed</code>",
    gunfeel_f2_title: "Pitch Randomization:",
    gunfeel_f2_desc: "สุ่ม Pitch ระหว่าง <code>minPitch</code> ถึง <code>maxPitch</code> ทุกนัด เสียงจึงไม่น่าเบื่อ",
    gunfeel_f3_title: "Muzzle Flash & Particle:",
    gunfeel_f3_desc: "เกิดที่จุด <code>muzzlePoint</code> และทำลายอัตโนมัติตามระยะเวลา Lifetime",
    gunfeel_f4_title: "Decal Placement:",
    gunfeel_f4_desc: "วางรอยกระสุนตาม Normal พร้อมคำนวณ Offset ป้องกัน Z-Fighting และตั้ง Parent ติดตามวัตถุได้",
    view_code_gunfeel: "📜 ดูโค้ด C# : GunFeel.cs",

    pickup_tag: "Module 4",
    pickup_title: "4. Pick up & Interaction",
    pickup_lead: "ระบบหยิบจับและตอบสนองกับวัตถุในฉาก รองรับการกดปุ่มเพื่อถือสิ่งของ การปิดฟิสิกส์ระหว่างถือ และระบบ Custom Inspector สำหรับปรับแต่งระยะและ UI",
    card_holder_title: "🤲 Pickup Holder",
    card_holder_desc: "ติดไว้ที่ตัวละครหรือตำแหน่งจุดถือ (Hand/Hold Transform) ทำหน้าที่คอยตรวจจับอินพุตและถือครองออบเจกต์",
    card_item_title: "📦 Pickup Item",
    card_item_desc: "ติดไว้ที่สิ่งของในฉากที่ต้องการให้หยิบได้ จัดการ Rigidbody ให้กลายเป็น Kinematic ขณะถือ และเปิดฟิสิกส์เมื่อปล่อย",
    card_editor_title: "🛠️ Custom Editor",
    card_editor_desc: "<code>PlayerInteractEditor.cs</code> ช่วยจัดระเบียบหน้า Inspector ใน Unity ให้ปรับแต่งระยะ Raycast/SphereCast ได้สะดวก",

    holder_badge: "Holder Controller",
    holder_desc: "สคริปต์จัดการการถือสิ่งของของผู้เล่น ตรวจสอบการกดปุ่ม Interact (ปุ่ม E) รองรับทั้ง New Input System และ Legacy Input Manager",
    holder_f1_title: "Multi-Input Support:",
    holder_f1_desc: "ตรวจสอบปุ่ม E อัตโนมัติ รองรับทั้ง <code>UnityEngine.InputSystem</code> และ <code>Input.GetKeyDown</code>",
    holder_f2_title: "Frame Guard:",
    holder_f2_desc: "ป้องกันการสลับหยิบ/วางซ้ำซ้อนในเฟรมเดียวกันด้วยตัวแปร <code>_lastPickupFrame</code> และ <code>_lastDropFrame</code>",
    holder_f3_title: "Auto Drop on Disable:",
    holder_f3_desc: "เมื่อตัวละครหรือ Holder ถูก Disable วัตถุที่ถืออยู่จะหล่นลงสู่พื้นทันทีอย่างปลอดภัย",
    view_code_holder: "📜 ดูโค้ด C# : PickupHolder.cs",

    item_badge: "Interactable Item Component",
    item_desc: "สคริปต์ติดที่วัตถุ (ต้องมี Rigidbody) ควบคุมการยึดติดกับ Holder, ปิดแรงโน้มถ่วง, ยกเลิกการชนกับผู้เล่นขณะถือ, และคืนค่าเดิมเมื่อปล่อย",
    item_f1_title: "Collision Ignore:",
    item_f1_desc: "ใช้ <code>Physics.IgnoreCollision</code> ระหว่าง Collider ของไอเทมกับผู้เล่น ไม่ให้ไอเทมดันตัวผู้เล่นกระเด็น",
    item_f2_title: "Transform Parenting:",
    item_f2_desc: "แนบไอเทมเข้ากับ Holder โดยเซ็ต Local Position/Rotation เป็น 0 และเปิด <code>isKinematic = true</code>",
    item_f3_title: "Interaction Prompt:",
    item_f3_desc: "มีข้อความ UI ในตัว (<code>\"Press E to pick up\"</code> / <code>\"Press E to drop\"</code>) พร้อมส่งต่อให้ระบบแสดงผล",
    view_code_item: "📜 ดูโค้ด C# : PickupItem.cs",

    editor_badge: "Custom Unity Editor",
    editor_desc: "Custom Inspector Editor สำหรับ <code>PlayerInteraction</code> เพื่อความสะดวกในการตั้งค่าโหมดมุมมอง (FirstPerson / ThirdPerson), ระยะตรวจสอบ, และการเชื่อมโยง UI",
    editor_f1_title: "Foldout Header Groups:",
    editor_f1_desc: "แยกหมวดหมู่การตั้งค่า Interaction Settings, UI, และ References อย่างชัดเจน",
    editor_f2_title: "Conditional Fields:",
    editor_f2_desc: "แสดงช่อง <code>SphereCastRadius</code> เฉพาะเมื่อเลือกมุมมองแบบ Third Person",
    view_code_editor: "📜 ดูโค้ด C# : PlayerInteractEditor.cs",

    // Module 5: Extra System (Thai)
    extra_system_tag: "Module 5",
    extra_system_title: "5. Extra System (ระบบเสริมและความสามารถพิเศษ)",
    extra_system_lead: "ระบบสกิลเสริมขั้นสูง ประกอบด้วย สลิงโหน Grappling Hook ฟิสิกส์ SpringJoint, การออกหมัดต่อย Melee Punch, ระบบสลับช่องสกิล 1-2-3, การหมุนกระบอกปืนเล็งตามสลิง, และกล้องซูม FOV",
    card_ability_title: "🔢 Ability Switcher",
    card_ability_desc: "ระบบสลับสกิล/อาวุธ (ช่อง 1: ยิงปืน, 2: สลิงโหน, 3: ต่อยมวย) ด้วยปุ่มตัวเลข",
    card_grapple_title: "🪝 Grappling Hook",
    card_grapple_desc: "สลิงโหนฟิสิกส์ SpringJoint พร้อมวาดเชือก LineRenderer และการจำกัดระยะโหน",
    card_punch_title: "🥊 Melee Punch",
    card_punch_desc: "การต่อยระยะประชิดมุมมองบุคคลที่หนึ่ง ส่งดาเมจและเรียก Callback ไปยังศัตรู",
    card_zoom_title: "🔍 Camera Zoom",
    card_zoom_desc: "กล้องซูมเล็งเป้าด้วยการเกลี่ยค่า FOV (Mathf.Lerp) เมื่อคลิกขวาค้าง",

    switcher_badge: "Ability Management",
    switcher_desc: "ตัวจัดการเปิด-ปิดคอมโพเนนต์สกิล (SimpleShooting, Grapplinghook, FpsPunch) ในช่อง 1, 2, และ 3 จากศูนย์กลาง",
    switcher_f1_title: "ปุ่มลัดช่องสกิล:",
    switcher_f1_desc: "กดปุ่ม <code>1</code> สำหรับยิงปืน, <code>2</code> สำหรับสลิง Grappling Hook, และ <code>3</code> สำหรับต่อยมวย",
    switcher_f2_title: "ค้นหาสคริปต์อัตโนมัติ:",
    switcher_f2_desc: "ใช้ <code>Object.FindObjectsByType</code> รวมออบเจกต์ที่ปิดอยู่ เพื่อค้นหาและจัดเก็บสคริปต์ทั้งหมดใน Awake",
    view_code_switcher: "📜 ดูโค้ด C# : AbilitySwitcher.cs",

    grapple_badge: "Physics Locomotion",
    grapple_desc: "ยิงสลิงไปยังพื้นผิวในเลเยอร์ <code>whatIsGrappleable</code> พร้อมสร้าง SpringJoint บนตัวผู้เล่นแบบไดนามิก",
    grapple_f1_title: "Dynamic SpringJoint:",
    grapple_f1_desc: "สร้างสปริงฟิสิกส์ที่ปรับแต่งค่า <code>spring</code>, <code>damper</code>, และ <code>massScale</code> ได้อย่างอิสระ",
    grapple_f2_title: "จำกัดระยะเหวี่ยง:",
    grapple_f2_desc: "จำกัดความยาวสลิงระหว่าง <code>minDistanceMultiplier</code> ถึง <code>maxDistanceMultiplier</code> เพื่อแรงเหวี่ยงที่สมจริง",
    grapple_f3_title: "วาดเส้นเชือก:",
    grapple_f3_desc: "วาดเส้นเชือก 2 จุดผ่าน <code>LineRenderer</code> ใน <code>LateUpdate</code> จากปลายกระบอกปืน <code>gunTip</code> ไปยังจุดยึด",
    view_code_grapple: "📜 ดูโค้ด C# : Grappling hook.cs",

    rotategun_badge: "Visual Alignment",
    rotategun_desc: "หมุนและหันปลายกระบอกปืนไปยังจุดยึดสลิงอย่างนุ่มนวลขณะกำลังโหน และคืนค่ามุมเดิมเมื่อปล่อยสลิง",
    rotategun_f1_title: "LookRotation Tracking:",
    rotategun_f1_desc: "คำนวณทิศทางการหันด้วย <code>Quaternion.LookRotation</code> ไปยังจุด Grapple Point",
    rotategun_f2_title: "เกลี่ยการหมุนนุ่มนวล:",
    rotategun_f2_desc: "ใช้ <code>Quaternion.Lerp</code> ตามความเร็ว <code>rotationSpeed</code> เพื่อความสมจริงในการจับอาวุธ",
    view_code_rotategun: "📜 ดูโค้ด C# : RotateGun.cs",

    punch_badge: "Melee Combat",
    punch_desc: "ออกหมัดโจมตีระยะประชิดด้วย Raycast จากกึ่งกลางหน้าจอ ส่งดาเมจและเรียกอีเวนต์เมื่อชนศัตรู",
    punch_f1_title: "ระยะหมัด Raycast:",
    punch_f1_desc: "ยิง Raycast ระยะ <code>_punchRange</code> (ปกติ 2 เมตร) ไปยังเลเยอร์ <code>_hittableLayers</code>",
    punch_f2_title: "ส่งดาเมจสู่ Health:",
    punch_f2_desc: "เรียกฟังก์ชันของ <code>EnemyPunchReceiver</code> และลดเลือดศัตรูผ่าน <code>Health.TakeHit(_damage)</code>",
    view_code_punch: "📜 ดูโค้ด C# : FpsPunch.cs",

    enemypunch_badge: "Damage Receiver",
    enemypunch_desc: "คอมโพเนนต์ติดที่ตัวศัตรูหรือวัตถุเพื่อรับอีเวนต์การโดนต่อยจากผู้เล่น",
    enemypunch_f1_title: "Event Callback:",
    enemypunch_f1_desc: "ทำงานผ่าน <code>ReceivePunch(GameObject attacker)</code> บันทึก Log ผู้ที่ทำการโจมตีเข้ามา",
    view_code_enemypunch: "📜 ดูโค้ด C# : EnemyPunch.cs",

    zoom_badge: "Camera Utility",
    zoom_desc: "เกลี่ยระยะมุมมองกล้อง (FOV) ให้นุ่มนวลเมื่อกดคลิกขวาค้างเพื่อเล็งเป้า",
    zoom_f1_title: "เกลี่ยค่า FOV:",
    zoom_f1_desc: "ใช้ <code>Mathf.Lerp</code> ปรับเปลี่ยนระหว่าง <code>normalFOV</code> และ <code>zoomFOV</code> ตาม <code>zoomSpeed</code>",
    zoom_f2_title: "คืนค่าทันทีเมื่อปล่อย:",
    zoom_f2_desc: "กลับสู่ระยะมุมมองปกติทันทีเมื่อปล่อยปุ่มคลิกขวา",
    view_code_zoom: "📜 ดูโค้ด C# : ZoomCamera.cs",

    principles_tag: "Engineering",
    principles_title: "หลักการทำงานเชิงลึก (Deep Dive)",
    principles_lead: "อธิบายแนวคิดเบื้องหลังการออกแบบคณิตศาสตร์และฟิสิกส์ ว่าทำไมระบบจึงทำงานได้ราบรื่นและไม่เกิดข้อขัดแย้ง",
    principle_1_title: "1. ฟิสิกส์ Velocity-Change ควบคุมการเคลื่อนที่",
    principle_1_desc: "ระบบไม่ใช้การบวกค่า Position ดิบ แต่คำนวณส่วนต่างความเร็ว <code>delta = targetVelocity - rb.linearVelocity</code> แล้วส่งผ่าน <code>ForceMode.VelocityChange</code> ทำให้ผู้เล่นเปลี่ยนทิศทางได้ทันทีโดยไม่ไถล และยังรองรับแรงชนจากฟิสิกส์ภายนอกอย่างสมบูรณ์",
    principle_2_title: "2. State Suspension สลับสถานะไม่ให้ฟิสิกส์ตีกัน",
    principle_2_desc: "เมื่อเข้าสู่สถานะสไลด์หรือไต่กำแพง <code>ExtraMovement</code> จะสั่งปิด <code>SimpleMovement.enabled = false</code> ชั่วคราว เพื่อไม่ให้อินพุตเดินปกติมาแย่งแรงส่ง เมื่อหลุดจากกำแพงหรือลุกขึ้นยืนจึงเปิดระบบเดินกลับมา",
    principle_3_title: "3. Dual-Lerp Procedural Recoil",
    principle_3_desc: "การดีดของปืนคำนวณด้วย Lerp สองชั้น ชั้นแรก <code>snappiness</code> ดึงปืนเข้าหาจุดดีดทันที และชั้นสอง <code>recoverySpeed</code> ค่อยๆ คืนตำแหน่งจุดดีดกลับสู่จุดกึ่งกลาง (Vector3.zero) ทำให้ได้ความรู้สึกกระชากแต่คืนตัวนุ่มนวล",
    principle_4_title: "4. Physics Handoff & Ignore Collision (Pickup)",
    principle_4_desc: "ตอนหยิบไอเทม ระบบจะจำค่าเดิมของ <code>useGravity</code> และ <code>isKinematic</code> ไว้ แล้วสั่ง <code>isKinematic = true</code> พร้อมสั่ง <code>Physics.IgnoreCollision</code> กับตัวละคร เพื่อป้องกันแรงชนประหลาดที่อาจดีดผู้เล่นลอย",
    principle_5_title: "5. Dynamic SpringJoint Grapple ฟิสิกส์สลิง",
    principle_5_desc: "ระบบ Grappling Hook สร้างคอมโพเนนต์ <code>SpringJoint</code> บนตัวผู้เล่นแบบรันไทม์ เชื่อมต่อกับจุดยึดในฉาก ทำให้ได้แรงเหวี่ยงและแรงดึงที่สมจริงตามเอนจินฟิสิกส์ของ Unity โดยไม่ต้องเขียนสมการวิถีโค้งขึ้นมาเอง",

    setup_tag: "Guide",
    setup_title: "วิธีติดตั้งและเริ่มต้นใช้งาน (Setup Guide)",
    setup_lead: "ขั้นตอนการติดตั้งโมดูลและการตั้งค่า Layers ใน Unity Inspector",
    step_1_title: "สร้าง Layers ใน Unity",
    step_1_p1: "ไปที่ <b>Edit &gt; Project Settings &gt; Tags and Layers</b> แล้วเพิ่มเลเยอร์ต่อไปนี้:",
    step_1_li1: "<code>Ground</code> – สำหรับพื้นผิวที่ผู้เล่นสามารถเดินหรือกระโดดได้",
    step_1_li2: "<code>Enemy</code> – สำหรับเป้าหมายหรือศัตรูที่รับการยิง Raycast",
    step_1_li3: "<code>Wall</code> – สำหรับกำแพงที่ต้องการให้วิ่งไต่ได้ (สำหรับโมดูล Movement)",
    step_1_li4: "<code>Grappleable</code> (ตัวเลือกเสริม) – สำหรับพื้นผิวที่สามารถยิงสลิงไปเกาะได้",
    step_2_title: "ลาก Prefab ลงใน Scene",
    step_2_base: "<strong>แบบพื้นฐาน (Base):</strong> ลาก <code>BaseFPSCharacter/Assets/Prefabs/Player.prefab</code> ลงใน Hierarchy แล้วตั้งค่า <code>Ground Mask = Ground</code> และ <code>Hit Layers = Enemy, Default</code>",
    step_2_variant: "<strong>แบบตัวละครพร้อมระบบสมบูรณ์ (Variant):</strong> ลาก <code>Visual System/Assets/Prefabs/Player Variant.prefab</code> แล้วตรวจสอบค่าใน Inspector:",
    step_2_vli1: "<code>SimpleMovement</code>: Ground Mask = <code>Ground</code>",
    step_2_vli2: "<code>ExtraMovement</code>: Ground Mask = <code>Ground</code>, Wall Mask = <code>Wall</code>, ลากคอมโพเนนต์ <code>SimpleMovement</code> มาใส่ในช่อง <b>Movement Script To Suspend</b>",
    step_2_vli3: "<code>GunFeel</code>: Hit Layers = <code>Ground, Enemy, Default</code>",
    step_3_title: "ตั้งค่าระบบ Pick up & Interaction",
    step_3_desc: "สร้าง Empty GameObject ใต้กล้องของผู้เล่น ตั้งชื่อว่า <code>HoldPoint</code> แล้วแนบสคริปต์ <code>PickupHolder.cs</code> ส่วนวัตถุในฉากที่ต้องการให้หยิบได้ ให้แนบคอมโพเนนต์ <code>PickupItem.cs</code> และ <code>Rigidbody</code>",
    step_4_title: "ตั้งค่าระบบ Extra System (สลิง, ต่อยมวย และสลับสกิล)",
    step_4_desc: "แนบสคริปต์ <code>AbilitySwitcher.cs</code> ไว้ที่ตัว Player, แนบ <code>Grapplinghook.cs</code> (พร้อม <code>LineRenderer</code>) และ <code>FpsPunch.cs</code> ไว้ที่ออบเจกต์อาวุธ/มือ และแนบ <code>EnemyPunchReceiver.cs</code> ไว้ที่ศัตรู",
    step_5_title: "กด Play เพื่อทดสอบ",
    step_5_desc: "สามารถเปิดทดสอบได้ทันทีใน <code>Preview Scene.unity</code>",
    notice_text: "<strong>⚠️ คำแนะนำเรื่องฟิสิกส์:</strong> หากตอนสไลด์หรือไต่กำแพงแล้วตัวละครหยุดชะงักหรือไม่ลื่นไหล ให้ตรวจสอบว่าได้ใส่ <code>SimpleMovement</code> ลงในช่อง <code>Movement Script To Suspend</code> ของ <code>ExtraMovement</code> แล้ว",

    controls_tag: "Keybinds",
    controls_title: "ปุ่มควบคุมทั้งหมด (Controls & Keybinds)",
    controls_lead: "สรุปปุ่มกดและเงื่อนไขการทำงานของแต่ละโมดูลในระบบ",
    th_action: "การกระทำ (Action)",
    th_key: "ปุ่มที่ใช้ (Keybind)",
    th_cond: "เงื่อนไข / สถานะ",
    th_mod: "โมดูลที่รับผิดชอบ",

    row1_action: "เดิน หน้า / หลัง / ซ้าย / ขวา",
    row1_cond: "ทุกสถานะ",
    row2_action: "หันมองรอบทิศทาง",
    row2_cond: "เคอร์เซอร์ล็อกอยู่",
    row3_action: "กระโดดปกติ",
    row3_cond: "ขณะอยู่บนพื้น (Grounded)",
    row4_action: "Double Jump (กระโดด 2 จังหวะ)",
    row4_cond: "ขณะลอยกลางอากาศ",
    row5_action: "Slide (สไลด์ตัว)",
    row5_cond: "ขณะวิ่งบนพื้นด้วยความเร็วสูงกว่า Min Speed",
    row6_action: "Wall Run (ไต่กำแพง)",
    row6_key: "<kbd>W</kbd> + ชนกำแพง",
    row6_cond: "กลางอากาศชนกำแพงเลเยอร์ Wall",
    row7_action: "Wall Jump (ดีดตัวจากกำแพง)",
    row7_cond: "ขณะกำลังไต่กำแพง (Wall Running)",
    row8_action: "ยิงปืน (พร้อม Recoil & Effect)",
    row8_key: "<kbd>Mouse Left (Fire1)</kbd>",
    row8_cond: "เมื่อเปิดใช้ช่อง 1 (Gun Shooting)",
    row9_action: "หยิบสิ่งของ / วางสิ่งของ",
    row9_cond: "มองที่วัตถุ หรือกดปล่อยขณะกำลังถือ",
    row10_action: "สลับช่องสกิล / อาวุธ",
    row10_key: "<kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd>",
    row10_cond: "1: ยิงปืน | 2: สลิงโหน | 3: ต่อยมวย",
    row11_action: "ยิงสลิงโหนตัว (Grapple)",
    row11_key: "<kbd>คลิกซ้ายค้าง</kbd>",
    row11_cond: "เมื่อเปิดใช้ช่อง 2 (เล็งที่จุด Grappleable)",
    row12_action: "ออกหมัดต่อยมวย (Punch)",
    row12_key: "<kbd>คลิกซ้าย</kbd>",
    row12_cond: "เมื่อเปิดใช้ช่อง 3 (ระยะไม่เกิน 2 เมตร)",
    row13_action: "ซูมกล้องเล็งเป้า (Zoom ADS)",
    row13_key: "<kbd>คลิกขวาค้าง</kbd>",
    row13_cond: "ทุกช่องที่มีคอมโพเนนต์ ZoomCamera",

    footer_title: "<strong>acatnon FPS Kit</strong> – Unity Modular FPS & Interaction Framework",
    footer_sub: "Designed for clean integration and high-performance gameplay.",
    copy_btn_text: "คัดลอกโค้ด",
    copied_btn_text: "คัดลอกแล้ว! ✓"
  }
};

let currentLang = localStorage.getItem("preferred_lang") || "en";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferred_lang", lang);
  document.documentElement.lang = lang;

  const data = translations[lang] || translations.en;

  // Update elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach(elem => {
    const key = elem.getAttribute("data-i18n");
    if (data[key] !== undefined) {
      elem.textContent = data[key];
    }
  });

  // Update elements with data-i18n-html
  document.querySelectorAll("[data-i18n-html]").forEach(elem => {
    const key = elem.getAttribute("data-i18n-html");
    if (data[key] !== undefined) {
      elem.innerHTML = data[key];
    }
  });

  // Update copy buttons text
  document.querySelectorAll(".copy-btn").forEach(btn => {
    if (!btn.classList.contains("copied")) {
      btn.textContent = data.copy_btn_text;
    }
  });

  // Update lang button text
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.textContent = data.lang_btn;
  }

  // Update page title
  if (data.page_title) {
    document.title = data.page_title;
  }
}

function toggleLanguage() {
  const nextLang = currentLang === "en" ? "th" : "en";
  applyLanguage(nextLang);
}

// Global Copy Code Function
function copyCode(button) {
  const details = button.closest(".code-details") || button.closest(".script-card");
  const codeElement = details.querySelector("pre code");
  const langData = translations[currentLang] || translations.en;

  if (codeElement) {
    navigator.clipboard.writeText(codeElement.innerText).then(() => {
      button.classList.add("copied");
      button.innerText = langData.copied_btn_text;
      button.style.borderColor = "var(--accent-green)";
      button.style.color = "var(--accent-green)";
      
      setTimeout(() => {
        button.classList.remove("copied");
        button.innerText = langData.copy_btn_text;
        button.style.borderColor = "";
        button.style.color = "";
      }, 2000);
    }).catch(err => {
      console.error("Failed to copy code: ", err);
    });
  }
}

// Initial setup on DOM load
document.addEventListener("DOMContentLoaded", () => {
  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.addEventListener("click", toggleLanguage);
  }
  applyLanguage(currentLang);
});
