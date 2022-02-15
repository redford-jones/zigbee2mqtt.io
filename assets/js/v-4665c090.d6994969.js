"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[28278],{32483:(e,o,t)=>{t.r(o),t.d(o,{data:()=>a});const a={key:"v-4665c090",path:"/devices/701721.html",title:"Popp 701721 control via MQTT",lang:"en-US",frontmatter:{title:"Popp 701721 control via MQTT",description:"Integrate your Popp 701721 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-10-01T17:18:02.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Keypad_lockout (enum)",slug:"keypad-lockout-enum",children:[]},{level:3,title:"Programming_operation_mode (enum)",slug:"programming-operation-mode-enum",children:[]},{level:3,title:"Mounted_mode_active (binary)",slug:"mounted-mode-active-binary",children:[]},{level:3,title:"Mounted_mode_control (binary)",slug:"mounted-mode-control-binary",children:[]},{level:3,title:"Thermostat_vertical_orientation (binary)",slug:"thermostat-vertical-orientation-binary",children:[]},{level:3,title:"Viewing_direction (binary)",slug:"viewing-direction-binary",children:[]},{level:3,title:"Heat_available (binary)",slug:"heat-available-binary",children:[]},{level:3,title:"Heat_required (binary)",slug:"heat-required-binary",children:[]},{level:3,title:"Setpoint_change_source (enum)",slug:"setpoint-change-source-enum",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"External_measured_room_sensor (numeric)",slug:"external-measured-room-sensor-numeric",children:[]},{level:3,title:"Radiator_covered (binary)",slug:"radiator-covered-binary",children:[]},{level:3,title:"Window_open_internal (numeric)",slug:"window-open-internal-numeric",children:[]},{level:3,title:"Window_open_external (binary)",slug:"window-open-external-binary",children:[]},{level:3,title:"Day_of_week (enum)",slug:"day-of-week-enum",children:[]},{level:3,title:"Trigger_time (numeric)",slug:"trigger-time-numeric",children:[]},{level:3,title:"Algorithm_scale_factor (numeric)",slug:"algorithm-scale-factor-numeric",children:[]},{level:3,title:"Load_balancing_enable (binary)",slug:"load-balancing-enable-binary",children:[]},{level:3,title:"Load_room_mean (numeric)",slug:"load-room-mean-numeric",children:[]},{level:3,title:"Load_estimate (numeric)",slug:"load-estimate-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/701721.md",git:{updatedTime:1644952859e3}}},41995:(e,o,t)=>{t.r(o),t.d(o,{default:()=>s});var a=t(66252);const d=(0,a.uE)('<h1 id="popp-701721" tabindex="-1"><a class="header-anchor" href="#popp-701721" aria-hidden="true">#</a> Popp 701721</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>701721</td></tr><tr><td>Vendor</td><td>Popp</td></tr><tr><td>Description</td><td>Smart thermostat based on Danfoss Ally (014G2461)</td></tr><tr><td>Exposes</td><td>battery, keypad_lockout, programming_operation_mode, mounted_mode_active, mounted_mode_control, thermostat_vertical_orientation, viewing_direction, heat_available, heat_required, setpoint_change_source, climate (occupied_heating_setpoint, local_temperature, pi_heating_demand, system_mode, running_state), external_measured_room_sensor, radiator_covered, window_open_internal, window_open_external, day_of_week, trigger_time, algorithm_scale_factor, load_balancing_enable, load_room_mean, load_estimate, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/701721.jpg" alt="Popp 701721"></td></tr></tbody></table><h2 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates" aria-hidden="true">#</a> OTA updates</h2>',3),i=(0,a.Uk)("This device supports OTA updates, for more information see "),c=(0,a.Uk)("OTA updates"),r=(0,a.Uk)("."),n=(0,a.uE)('<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum" aria-hidden="true">#</a> Keypad_lockout (enum)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>, <code>lock2</code>.</p><h3 id="programming-operation-mode-enum" tabindex="-1"><a class="header-anchor" href="#programming-operation-mode-enum" aria-hidden="true">#</a> Programming_operation_mode (enum)</h3><p>Controls how programming affects the thermostat. Possible values: setpoint (only use specified setpoint), schedule (follow programmed setpoint schedule). Changing this value does not clear programmed schedules.. Value can be found in the published state on the <code>programming_operation_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;programming_operation_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;programming_operation_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>setpoint</code>, <code>schedule</code>.</p><h3 id="mounted-mode-active-binary" tabindex="-1"><a class="header-anchor" href="#mounted-mode-active-binary" aria-hidden="true">#</a> Mounted_mode_active (binary)</h3><p>Is the unit in mounting mode. This is set to <code>false</code> for mounted (already on the radiator) or <code>true</code> for not mounted (after factory reset). Value can be found in the published state on the <code>mounted_mode_active</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mounted_mode_active&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> mounted_mode_active is ON, if <code>false</code> OFF.</p><h3 id="mounted-mode-control-binary" tabindex="-1"><a class="header-anchor" href="#mounted-mode-control-binary" aria-hidden="true">#</a> Mounted_mode_control (binary)</h3><p>Set the unit mounting mode. <code>false</code> Go to Mounted Mode or <code>true</code> Go to Mounting Mode. Value can be found in the published state on the <code>mounted_mode_control</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;mounted_mode_control&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;mounted_mode_control&quot;: NEW_VALUE}</code>. If value equals <code>true</code> mounted_mode_control is ON, if <code>false</code> OFF.</p><h3 id="thermostat-vertical-orientation-binary" tabindex="-1"><a class="header-anchor" href="#thermostat-vertical-orientation-binary" aria-hidden="true">#</a> Thermostat_vertical_orientation (binary)</h3><p>Thermostat Orientation. This is important for the PID in how it assesses temperature. <code>false</code> Horizontal or <code>true</code> Vertical. Value can be found in the published state on the <code>thermostat_vertical_orientation</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;thermostat_vertical_orientation&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;thermostat_vertical_orientation&quot;: NEW_VALUE}</code>. If value equals <code>true</code> thermostat_vertical_orientation is ON, if <code>false</code> OFF.</p><h3 id="viewing-direction-binary" tabindex="-1"><a class="header-anchor" href="#viewing-direction-binary" aria-hidden="true">#</a> Viewing_direction (binary)</h3><p>Viewing/Display Direction. <code>false</code> Horizontal or <code>true</code> Vertical. Value can be found in the published state on the <code>viewing_direction</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;viewing_direction&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;viewing_direction&quot;: NEW_VALUE}</code>. If value equals <code>true</code> viewing_direction is ON, if <code>false</code> OFF.</p><h3 id="heat-available-binary" tabindex="-1"><a class="header-anchor" href="#heat-available-binary" aria-hidden="true">#</a> Heat_available (binary)</h3><p>Not clear how this affects operation. However, it would appear that the device does not execute any motor functions if this is set to false. This may be a means to conserve battery during periods that the heating system is not energized (e.g. during summer). <code>false</code> No Heat Available or <code>true</code> Heat Available. Value can be found in the published state on the <code>heat_available</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;heat_available&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;heat_available&quot;: NEW_VALUE}</code>. If value equals <code>true</code> heat_available is ON, if <code>false</code> OFF.</p><h3 id="heat-required-binary" tabindex="-1"><a class="header-anchor" href="#heat-required-binary" aria-hidden="true">#</a> Heat_required (binary)</h3><p>Whether or not the unit needs warm water. <code>false</code> No Heat Request or <code>true</code> Heat Request. Value can be found in the published state on the <code>heat_required</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;heat_required&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. If value equals <code>true</code> heat_required is ON, if <code>false</code> OFF.</p><h3 id="setpoint-change-source-enum" tabindex="-1"><a class="header-anchor" href="#setpoint-change-source-enum" aria-hidden="true">#</a> Setpoint_change_source (enum)</h3><p>Values observed are <code>0</code> (manual), <code>1</code> (schedule) or <code>2</code> (externally). Value can be found in the published state on the <code>setpoint_change_source</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>manual</code>, <code>schedule</code>, <code>externally</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>pi_heating_demand</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>32</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="external-measured-room-sensor-numeric" tabindex="-1"><a class="header-anchor" href="#external-measured-room-sensor-numeric" aria-hidden="true">#</a> External_measured_room_sensor (numeric)</h3><p>If <code>radiator_covered</code> is <code>true</code>: Set at maximum 30 minutes interval but not more often than every 5 minutes and 0.1 degrees difference. Resets every 35 minutes to standard. If <code>radiator_covered</code> is <code>false</code>: Set at maximum 3 hours interval but not more often than every 30 minutes and 0.1 degrees difference. Resets every 3 hours to standard. Value 21C = 2100 (-8000=undefined).. Value can be found in the published state on the <code>external_measured_room_sensor</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;external_measured_room_sensor&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;external_measured_room_sensor&quot;: NEW_VALUE}</code>. The minimal value is <code>-8000</code> and the maximum value is <code>3500</code>.</p><h3 id="radiator-covered-binary" tabindex="-1"><a class="header-anchor" href="#radiator-covered-binary" aria-hidden="true">#</a> Radiator_covered (binary)</h3><p>Set if the TRV should solely rely on external_measured_room_sensor or operate in offset mode. <code>false</code> = Auto Offset Mode or <code>true</code> = Room Sensor Mode. Value can be found in the published state on the <code>radiator_covered</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;radiator_covered&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;radiator_covered&quot;: NEW_VALUE}</code>. If value equals <code>true</code> radiator_covered is ON, if <code>false</code> OFF.</p><h3 id="window-open-internal-numeric" tabindex="-1"><a class="header-anchor" href="#window-open-internal-numeric" aria-hidden="true">#</a> Window_open_internal (numeric)</h3><p>0=Quarantine, 1=Windows are closed, 2=Hold - Windows are maybe about to open, 3=Open window detected, 4=In window open state from external but detected closed locally. Value can be found in the published state on the <code>window_open_internal</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_internal&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>4</code>.</p><h3 id="window-open-external-binary" tabindex="-1"><a class="header-anchor" href="#window-open-external-binary" aria-hidden="true">#</a> Window_open_external (binary)</h3><p>Set if the window is open or close. This setting will trigger a change in the internal window and heating demand. <code>false</code> (windows are closed) or <code>true</code> (windows are open). Value can be found in the published state on the <code>window_open_external</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;window_open_external&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;window_open_external&quot;: NEW_VALUE}</code>. If value equals <code>true</code> window_open_external is ON, if <code>false</code> OFF.</p><h3 id="day-of-week-enum" tabindex="-1"><a class="header-anchor" href="#day-of-week-enum" aria-hidden="true">#</a> Day_of_week (enum)</h3><p>Exercise day of week: 0=Sun...6=Sat, 7=undefined. Value can be found in the published state on the <code>day_of_week</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;day_of_week&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;day_of_week&quot;: NEW_VALUE}</code>. The possible values are: <code>sunday</code>, <code>monday</code>, <code>tuesday</code>, <code>wednesday</code>, <code>thursday</code>, <code>friday</code>, <code>saturday</code>, <code>away_or_vacation</code>.</p><h3 id="trigger-time-numeric" tabindex="-1"><a class="header-anchor" href="#trigger-time-numeric" aria-hidden="true">#</a> Trigger_time (numeric)</h3><p>Exercise trigger time. Minutes since midnight (65535=undefined). Range 0 to 1439. Value can be found in the published state on the <code>trigger_time</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;trigger_time&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;trigger_time&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="algorithm-scale-factor-numeric" tabindex="-1"><a class="header-anchor" href="#algorithm-scale-factor-numeric" aria-hidden="true">#</a> Algorithm_scale_factor (numeric)</h3><p>Scale factor of setpoint filter timeconstant (&quot;aggressiveness&quot; of control algorithm) 1= Quick ... 5=Moderate ... 10=Slow. Value can be found in the published state on the <code>algorithm_scale_factor</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;algorithm_scale_factor&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;algorithm_scale_factor&quot;: NEW_VALUE}</code>. The minimal value is <code>1</code> and the maximum value is <code>10</code>.</p><h3 id="load-balancing-enable-binary" tabindex="-1"><a class="header-anchor" href="#load-balancing-enable-binary" aria-hidden="true">#</a> Load_balancing_enable (binary)</h3><p>Whether or not the thermostat acts as standalone thermostat or shares load with other thermostats in the room. The gateway must update load_room_mean if enabled.. Value can be found in the published state on the <code>load_balancing_enable</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;load_balancing_enable&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;load_balancing_enable&quot;: NEW_VALUE}</code>. If value equals <code>true</code> load_balancing_enable is ON, if <code>false</code> OFF.</p><h3 id="load-room-mean-numeric" tabindex="-1"><a class="header-anchor" href="#load-room-mean-numeric" aria-hidden="true">#</a> Load_room_mean (numeric)</h3><p>Mean radiator load for room calculated by gateway for load balancing purposes (-8000=undefined). Value can be found in the published state on the <code>load_room_mean</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;load_room_mean&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;load_room_mean&quot;: NEW_VALUE}</code>. The minimal value is <code>-8000</code> and the maximum value is <code>2000</code>.</p><h3 id="load-estimate-numeric" tabindex="-1"><a class="header-anchor" href="#load-estimate-numeric" aria-hidden="true">#</a> Load_estimate (numeric)</h3><p>Load estimate on this radiator. Value can be found in the published state on the <code>load_estimate</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;load_estimate&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',46),l={},s=(0,t(83744).Z)(l,[["render",function(e,o){const t=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[d,(0,a._)("p",null,[i,(0,a.Wm)(t,{to:"/guide/usage/ota_updates.html"},{default:(0,a.w5)((()=>[c])),_:1}),r]),n],64)}]])},83744:(e,o)=>{o.Z=(e,o)=>{for(const[t,a]of o)e[t]=a;return e}}}]);