function loadNewSheet(argument) {
    location.reload();
}

$(document).ready(function(argument) {

    //Change the title to the character name
    if (loadJson.page1.basic_info.char_name)
        document.title = loadJson.page1.basic_info.char_name;

    //Load Basic Info
    $('#character-basic-info #basic-info input[name="char-name"]').val(loadJson.page1.basic_info.char_name);
    $('#character-basic-info #basic-info input[name="level"]').val(loadJson.page1.basic_info.level);
    $('#character-basic-info #basic-info input[name="level-two"]').val(loadJson.page1.basic_info.level_two);

    //Load Character Info
    $('#character-basic-info #character-info input[name="race-class"]').val(loadJson.page1.character_info.race_class);
    $('#character-basic-info #character-info input[name="background"]').val(loadJson.page1.character_info.background);
    $('#character-basic-info #character-info input[name="player-name"]').val(loadJson.page1.character_info.player_name);
    $('#character-basic-info #character-info input[name="exp"]').val(loadJson.page1.character_info.exp);
    $('#character-basic-info #character-info input[name="alignment"]').val(loadJson.page1.character_info.alignment);
    $('#character-basic-info #character-info input[name="deity"]').val(loadJson.page1.character_info.deity);

    //Load Info Bar
    $('#page-1 #top-bar input[name="proficiency"]').val(loadJson.page1.top_bar.proficiency);
    $('#page-1 #top-bar input[name="initiative"]').val(loadJson.page1.top_bar.initiative);
    $('#page-1 #top-bar input[name="passive-perception"]').val(loadJson.page1.top_bar.passive_perception);
    $('#page-1 #top-bar input[name="ac"]').val(loadJson.page1.top_bar.ac);
    $('#page-1 #top-bar input[name="speed"]').val(loadJson.page1.top_bar.speed);
    $('#page-1 #top-bar input[name="spell-dc"]').val(loadJson.page1.top_bar.spell_dc);
    $('#page-1 #top-bar input[name="insperation"]').val(loadJson.page1.top_bar.insperation);

    //Load Attributes
    $('#page-1 #attributes input[name="str"]').val(loadJson.page1.attributes.str);
    $('#page-1 #attributes input[name="str-mod"]').val(loadJson.page1.attributes.str_mod);
    $('#page-1 #attributes input[name="dex"]').val(loadJson.page1.attributes.dex);
    $('#page-1 #attributes input[name="dex-mod"]').val(loadJson.page1.attributes.dex_mod);
    $('#page-1 #attributes input[name="con"]').val(loadJson.page1.attributes.con);
    $('#page-1 #attributes input[name="con-mod"]').val(loadJson.page1.attributes.con_mod);
    $('#page-1 #attributes input[name="int"]').val(loadJson.page1.attributes.int);
    $('#page-1 #attributes input[name="int-mod"]').val(loadJson.page1.attributes.int_mod);
    $('#page-1 #attributes input[name="wis"]').val(loadJson.page1.attributes.wis);
    $('#page-1 #attributes input[name="wis-mod"]').val(loadJson.page1.attributes.wis_mod);
    $('#page-1 #attributes input[name="cha"]').val(loadJson.page1.attributes.cha);
    $('#page-1 #attributes input[name="cha-mod"]').val(loadJson.page1.attributes.cha_mod);

    //Load Skills and Saves	
    $('#page-1 #saves-skills select[name="spell-att"]').val(loadJson.page1.saves_skills.spell_casting);
    if (!$('#saves-skills select[name="spell-att"]').val()) {
        $('#saves-skills select[name="spell-att"]').val('none').change();
    }

    $('#page-1 #saves-skills #saves input[name="str-save"]').val(loadJson.page1.saves_skills.saves.str_save.val);
    $('#page-1 #saves-skills #saves #str-save input[name="prof"]').prop("checked", loadJson.page1.saves_skills.saves.str_save.prof);
    $('#page-1 #saves-skills #saves input[name="dex-save"]').val(loadJson.page1.saves_skills.saves.dex_save.val);
    $('#page-1 #saves-skills #saves #dex-save input[name="prof"]').prop("checked", loadJson.page1.saves_skills.saves.dex_save.prof);
    $('#page-1 #saves-skills #saves input[name="con-save"]').val(loadJson.page1.saves_skills.saves.con_save.val);
    $('#page-1 #saves-skills #saves #con-save input[name="prof"]').prop("checked", loadJson.page1.saves_skills.saves.con_save.prof);
    $('#page-1 #saves-skills #saves input[name="int-save"]').val(loadJson.page1.saves_skills.saves.int_save.val);
    $('#page-1 #saves-skills #saves #int-save input[name="prof"]').prop("checked", loadJson.page1.saves_skills.saves.int_save.prof);
    $('#page-1 #saves-skills #saves input[name="wis-save"]').val(loadJson.page1.saves_skills.saves.wis_save.val);
    $('#page-1 #saves-skills #saves #wis-save input[name="prof"]').prop("checked", loadJson.page1.saves_skills.saves.wis_save.prof);
    $('#page-1 #saves-skills #saves input[name="cha-save"]').val(loadJson.page1.saves_skills.saves.cha_save.val);
    $('#page-1 #saves-skills #saves #cha-save input[name="prof"]').prop("checked", loadJson.page1.saves_skills.saves.cha_save.prof);

    $('#page-1 #saves-skills #skills input[name="acrobatics-skill"]').val(loadJson.page1.saves_skills.skills.acrobatics.val);
    $('#page-1 #saves-skills #skills #acrobatics-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.acrobatics.prof);
    $('#page-1 #saves-skills #skills #acrobatics-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.acrobatics.expr);

    $('#page-1 #saves-skills #skills input[name="animal-handling-skill"]').val(loadJson.page1.saves_skills.skills.animal_handling.val);
    $('#page-1 #saves-skills #skills #animal-handling-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.animal_handling.prof);
    $('#page-1 #saves-skills #skills #animal-handling-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.animal_handling.expr)

    $('#page-1 #saves-skills #skills input[name="arcana-skill"]').val(loadJson.page1.saves_skills.skills.arcana.val);
    $('#page-1 #saves-skills #skills #arcana-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.arcana.prof);
    $('#page-1 #saves-skills #skills #arcana-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.arcana.expr);

    $('#page-1 #saves-skills #skills input[name="athletics-skill"]').val(loadJson.page1.saves_skills.skills.athletics.val);
    $('#page-1 #saves-skills #skills #athletics-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.athletics.prof);
    $('#page-1 #saves-skills #skills #athletics-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.athletics.expr);

    $('#page-1 #saves-skills #skills input[name="deception-skill"]').val(loadJson.page1.saves_skills.skills.deception.val);
    $('#page-1 #saves-skills #skills #deception-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.deception.prof);
    $('#page-1 #saves-skills #skills #deception-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.deception.expr);

    $('#page-1 #saves-skills #skills input[name="history-skill"]').val(loadJson.page1.saves_skills.skills.history.val);
    $('#page-1 #saves-skills #skills #history-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.history.prof);
    $('#page-1 #saves-skills #skills #history-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.history.expr);

    $('#page-1 #saves-skills #skills input[name="insight-skill"]').val(loadJson.page1.saves_skills.skills.insight.val);
    $('#page-1 #saves-skills #skills #insight-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.insight.prof);
    $('#page-1 #saves-skills #skills #insight-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.insight.expr);

    $('#page-1 #saves-skills #skills input[name="intimidation-skill"]').val(loadJson.page1.saves_skills.skills.intimidation.val);
    $('#page-1 #saves-skills #skills #intimidation-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.intimidation.prof);
    $('#page-1 #saves-skills #skills #intimidation-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.intimidation.expr);

    $('#page-1 #saves-skills #skills input[name="investigation-skill"]').val(loadJson.page1.saves_skills.skills.investigation.val);
    $('#page-1 #saves-skills #skills #investigation-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.investigation.prof);
    $('#page-1 #saves-skills #skills #investigation-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.investigation.expr);

    $('#page-1 #saves-skills #skills input[name="medicine-skill"]').val(loadJson.page1.saves_skills.skills.medicine.val);
    $('#page-1 #saves-skills #skills #medicine-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.medicine.prof);
    $('#page-1 #saves-skills #skills #medicine-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.medicine.expr);

    $('#page-1 #saves-skills #skills input[name="nature-skill"]').val(loadJson.page1.saves_skills.skills.nature.val);
    $('#page-1 #saves-skills #skills #nature-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.nature.prof);
    $('#page-1 #saves-skills #skills #nature-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.nature.expr);

    $('#page-1 #saves-skills #skills input[name="perception-skill"]').val(loadJson.page1.saves_skills.skills.perception.val);
    $('#page-1 #saves-skills #skills #perception-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.perception.prof);
    $('#page-1 #saves-skills #skills #perception-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.perception.expr);

    $('#page-1 #saves-skills #skills input[name="performance-skill"]').val(loadJson.page1.saves_skills.skills.performance.val);
    $('#page-1 #saves-skills #skills #performance-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.performance.prof);
    $('#page-1 #saves-skills #skills #performance-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.performance.expr);

    $('#page-1 #saves-skills #skills input[name="persuasion-skill"]').val(loadJson.page1.saves_skills.skills.persuasion.val);
    $('#page-1 #saves-skills #skills #persuasion-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.persuasion.prof);
    $('#page-1 #saves-skills #skills #persuasion-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.persuasion.expr);

    $('#page-1 #saves-skills #skills input[name="religion-skill"]').val(loadJson.page1.saves_skills.skills.religion.val);
    $('#page-1 #saves-skills #skills #religion-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.religion.prof);
    $('#page-1 #saves-skills #skills #religion-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.religion.expr);

    $('#page-1 #saves-skills #skills input[name="sleight-hand-skill"]').val(loadJson.page1.saves_skills.skills.sleight_hand.val);
    $('#page-1 #saves-skills #skills #sleight-hand-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.sleight_hand.prof);
    $('#page-1 #saves-skills #skills #sleight-hand-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.sleight_hand.expr);

    $('#page-1 #saves-skills #skills input[name="stealth-skill"]').val(loadJson.page1.saves_skills.skills.stealth.val);
    $('#page-1 #saves-skills #skills #stealth-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.stealth.prof);
    $('#page-1 #saves-skills #skills #stealth-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.stealth.expr);

    $('#page-1 #saves-skills #skills input[name="survival-skill"]').val(loadJson.page1.saves_skills.skills.survival.val);
    $('#page-1 #saves-skills #skills #survival-skill input[name="prof"]').prop("checked", loadJson.page1.saves_skills.skills.survival.prof);
    $('#page-1 #saves-skills #skills #survival-skill input[name="expr"]').prop("checked", loadJson.page1.saves_skills.skills.survival.expr);

    //Load Status
    $('#page-1 #status #conditions textarea[name="conditions"]').val(loadJson.page1.status.conditions);
    $('#page-1 #status #boons textarea[name="boons"]').val(loadJson.page1.status.boons);
    $('#page-1 #status #death-saves input[name="success-1"]').prop("checked", loadJson.page1.status.death_saves.success.one);
    $('#page-1 #status #death-saves input[name="success-2"]').prop("checked", loadJson.page1.status.death_saves.success.two);
    $('#page-1 #status #death-saves input[name="success-3"]').prop("checked", loadJson.page1.status.death_saves.success.three);
    $('#page-1 #status #death-saves input[name="failure-1"]').prop("checked", loadJson.page1.status.death_saves.failure.one);
    $('#page-1 #status #death-saves input[name="failure-2"]').prop("checked", loadJson.page1.status.death_saves.failure.two);
    $('#page-1 #status #death-saves input[name="failure-3"]').prop("checked", loadJson.page1.status.death_saves.failure.three);
    $('#page-1 #status #hit-dice input[name="hit-dice"]').val(loadJson.page1.status.hit_dice.type);
    $('#page-1 #status #hit-dice input[name="current-hd"]').val(loadJson.page1.status.hit_dice.current_hd);
    $('#page-1 #status #hit-points input[name="temp-health"]').val(loadJson.page1.status.temp_health);
    $('#page-1 #status #hit-points input[name="current-health"]').val(loadJson.page1.status.current_health);
    $('#page-1 #status #hit-points input[name="max-health"]').val(loadJson.page1.status.max_health);

    //Load Proficiencies
    $('#page-1 #proficiencies #weapons-armor textarea[name="weapons-armor"]').val(loadJson.page1.proficiencies.weapon_armor);
    $('#page-1 #proficiencies #tools textarea[name="tools"]').val(loadJson.page1.proficiencies.tools);
    $('#page-1 #proficiencies #languages textarea[name="languages"]').val(loadJson.page1.proficiencies.languages);

    //Load Attacks
    $.each(loadJson.page1.attacks_spells, function(index, value) {
        $('#page-1 #attacks-spells #attacks tbody').append(`
            <tr>                    <td><input type="text" name="name" value="` + value.name + `"/></td>
                <td><input type="text" name="stat" value="` + value.stat + `"/></td>
                <td><input type="text" name="toHit" value="` + value.toHit + `"/></td>
                <td><input type="text" name="damage" value="` + value.damage + `"/></td>
                <td><input type="text" name="damage_type" value="` + value.damage_type + `"/></td>
                <td><button>X</button></td>                </tr>
            `);
    });

    //Load Charges
    $('#page-1 #charges #charge-1 input[name="charge-1"]').val(loadJson.page1.charges.charge_1.name);
    $.each(loadJson.page1.charges.charge_1.total, function(index, value) {
        $('#page-1 #charges #charge-1 input[name="' + value + '"]').prop("checked", true);
    });
    $('#page-1 #charges #charge-2 input[name="charge-2"]').val(loadJson.page1.charges.charge_2.name);
    $.each(loadJson.page1.charges.charge_2.total, function(index, value) {
        $('#page-1 #charges #charge-2 input[name="' + value + '"]').prop("checked", true);
    });
    $('#page-1 #charges #charge-3 input[name="charge-3"]').val(loadJson.page1.charges.charge_3.name);
    $.each(loadJson.page1.charges.charge_3.total, function(index, value) {
        $('#page-1 #charges #charge-3 input[name="' + value + '"]').prop("checked", true);
    });
    $('#page-1 #charges #charge-4 input[name="charge-4"]').val(loadJson.page1.charges.charge_4.name);
    $.each(loadJson.page1.charges.charge_4.total, function(index, value) {
        $('#page-1 #charges #charge-4 input[name="' + value + '"]').prop("checked", true);
    });
    $('#page-1 #charges #charge-5 input[name="charge-5"]').val(loadJson.page1.charges.charge_5.name);
    $.each(loadJson.page1.charges.charge_5.total, function(index, value) {
        $('#page-1 #charges #charge-5 input[name="' + value + '"]').prop("checked", true);
    });
    $('#page-1 #charges #charge-6 input[name="charge-6"]').val(loadJson.page1.charges.charge_6.name);
    $.each(loadJson.page1.charges.charge_6.total, function(index, value) {
        $('#page-1 #charges #charge-6 input[name="' + value + '"]').prop("checked", true);
    });

    //Load Feats and Traits
    $('#page-1 #features textarea[name="features"]').val(loadJson.page1.features);

    //Load Equipment
    $.each(loadJson.page2.equipment.val.col_1, function(index, value) {
        var child = index + 2;
        $('#page-2 #equipment .col-1 tr:nth-child(' + child + ') input[name="name"]').val(value.name);
        $('#page-2 #equipment .col-1 tr:nth-child(' + child + ') input[name="weight"]').val(value.weight);
    });

    $.each(loadJson.page2.equipment.val.col_2, function(index, value) {
        var child = index + 1;
        $('#page-2 #equipment .col-2 tr:nth-child(' + child + ') input[name="name"]').val(value.name);
        $('#page-2 #equipment .col-2 tr:nth-child(' + child + ') input[name="weight"]').val(value.weight);
    });

    $('#page-2 #equipment tr#total input[name="total-weight"').val(loadJson.page2.equipment.total_weight);

    $('#page-2 #currancy input[name="copper"]').val(loadJson.page2.equipment.currency.copper);
    $('#page-2 #currancy input[name="silver"]').val(loadJson.page2.equipment.currency.silver);
    $('#page-2 #currancy input[name="gold"]').val(loadJson.page2.equipment.currency.gold);
    $('#page-2 #currancy input[name="electrum"]').val(loadJson.page2.equipment.currency.electrum);
    $('#page-2 #currancy input[name="platinum"]').val(loadJson.page2.equipment.currency.platinum);
    $('#page-2 #currancy input[name="total"]').val(loadJson.page2.equipment.currency.total);
    $('#page-2 #currancy select[name="base"]').val(loadJson.page2.equipment.currency.base);

    $('#page-2 #encumberance input[name="base-encumberance"]').val(loadJson.page2.equipment.encumberance.base);
    $('#page-2 #encumberance input[name="encumbered-encumberance"]').val(loadJson.page2.equipment.encumberance.encumbered);
    $('#page-2 #encumberance input[name="h-encumbered-encumberance"]').val(loadJson.page2.equipment.encumberance.h_encumbered);
    $('#page-2 #encumberance input[name="push-encumberance"]').val(loadJson.page2.equipment.encumberance.push);

    //Load Mount
    $('#page-2 #mount-pet input[name="mount-name"]').val(loadJson.page2.mount_pet.name);
    $('#page-2 #mount-pet input[name="mount-type"]').val(loadJson.page2.mount_pet.type);
    $('#page-2 #mount-pet input[name="mount-health"]').val(loadJson.page2.mount_pet.health);
    $('#page-2 #mount-pet input[name="mount-ac"]').val(loadJson.page2.mount_pet.ac);
    $('#page-2 #mount-pet input[name="mount-speed"]').val(loadJson.page2.mount_pet.speed);
    $('#page-2 #mount-pet textarea[name="mount-notes"]').val(loadJson.page2.mount_pet.notes);

    //Load Mount 2
    $('#page-2 #mount-pet input[name="mount-name-2"]').val(loadJson.page2.mount_pet2.name2);
    $('#page-2 #mount-pet input[name="mount-type-2"]').val(loadJson.page2.mount_pet2.type2);
    $('#page-2 #mount-pet input[name="mount-health-2"]').val(loadJson.page2.mount_pet2.health2);
    $('#page-2 #mount-pet input[name="mount-ac-2"]').val(loadJson.page2.mount_pet2.ac2);
    $('#page-2 #mount-pet input[name="mount-speed-2"]').val(loadJson.page2.mount_pet2.speed2);
    $('#page-2 #mount-pet textarea[name="mount-notes-2"]').val(loadJson.page2.mount_pet2.notes2);

    //Load Backstory
    $('#page-4 #backstory textarea[name="backstory"]').val(loadJson.page4.backstory);

    //Load allies/organizations
    $('#page-4 #allies-organizations input[name="name"]').val(loadJson.page4.allies_organizations.name);
    $('#page-4 #allies-organizations textarea[name="allies-organizations"]').val(loadJson.page4.allies_organizations.val);

    //Load Personality
    $('#personality #personality-traits textarea[name="personality-traits"]').val(loadJson.page4.personality.personality_traits);
    $('#personality #ideals textarea[name="ideals"]').val(loadJson.page4.personality.ideals);
    $('#personality #bonds textarea[name="bonds"]').val(loadJson.page4.personality.bonds);
    $('#personality #flaws textarea[name="flaws"]').val(loadJson.page4.personality.flaws);

    //Load Notes
    $('#page-5 #notes-1 textarea[name="notes-1"]').val(loadJson.page5.notes_1);
    $('#page-5 #notes-2 textarea[name="notes-2"]').val(loadJson.page5.notes_2);

    //Load Spell Info
    $('#page-3 #spell-info input[name="class"]').val(loadJson.page3.spell_info.class);
    $('#page-3 #spell-info input[name="att"]').val(loadJson.page3.spell_info.att);
    $('#page-3 #spell-info input[name="dc"]').val(loadJson.page3.spell_info.dc);
    $('#page-3 #spell-info input[name="bonus"]').val(loadJson.page3.spell_info.bonus);

    //Load Spells
    $.each(loadJson.page3.spells.cantrips.spells, function(index, value) {
        var child = index + 1;
        $('#page-3 #spells #cantrips .spells .spell:nth-child(' + child + ') input[name="spell-name"]').val(value.spell_name);
    });

    $('#page-3 #spells #level-1 input[name="total-1"]').val(loadJson.page3.spells.level_1.total);
    //In changes.js
    updateSpellSlots($('#page-3 #spells #level-1 input[name="total-1"]'));
    $.each(loadJson.page3.spells.level_1.spells, function(index, value) {
        var child = index + 1;
        $('#page-3 #spells #level-1 .spells .spell:nth-child(' + child + ') input[name="preped"]').prop("checked", value.preped);
        $('#page-3 #spells #level-1 .spells .spell:nth-child(' + child + ') input[name="spell-name"]').val(value.spell_name);
    });


    $('#page-3 #spells #level-2 input[name="total-2"]').val(loadJson.page3.spells.level_2.total);
    //In changes.js
    updateSpellSlots($('#page-3 #spells #level-2 input[name="total-2"]'));
    $.each(loadJson.page3.spells.level_2.spells, function(index, value) {
        var child = index + 1;
        $('#page-3 #spells #level-2 .spells .spell:nth-child(' + child + ') input[name="preped"]').prop("checked", value.preped);
        $('#page-3 #spells #level-2 .spells .spell:nth-child(' + child + ') input[name="spell-name"]').val(value.spell_name);
    });


    $('#page-3 #spells #level-3 input[name="total-3"]').val(loadJson.page3.spells.level_3.total);
    //In changes.js
    updateSpellSlots($('#page-3 #spells #level-3 input[name="total-3"]'));
    $.each(loadJson.page3.spells.level_3.spells, function(index, value) {
        var child = index + 1;
        $('#page-3 #spells #level-3 .spells .spell:nth-child(' + child + ') input[name="preped"]').prop("checked", value.preped);
        $('#page-3 #spells #level-3 .spells .spell:nth-child(' + child + ') input[name="spell-name"]').val(value.spell_name);
    });


    $('#page-3 #spells #level-4 input[name="total-4"]').val(loadJson.page3.spells.level_4.total);
    //In changes.js
    updateSpellSlots($('#page-3 #spells #level-4 input[name="total-4"]'));
    $.each(loadJson.page3.spells.level_4.spells, function(index, value) {
        var child = index + 1;
        $('#page-3 #spells #level-4 .spells .spell:nth-child(' + child + ') input[name="preped"]').prop("checked", value.preped);
        $('#page-3 #spells #level-4 .spells .spell:nth-child(' + child + ') input[name="spell-name"]').val(value.spell_name);
    });


    $('#page-3 #spells #level-5 input[name="total-5"]').val(loadJson.page3.spells.level_5.total);
    //In changes.js
    updateSpellSlots($('#page-3 #spells #level-5 input[name="total-5"]'));
    $.each(loadJson.page3.spells.level_5.spells, function(index, value) {
        var child = index + 1;
        $('#page-3 #spells #level-5 .spells .spell:nth-child(' + child + ') input[name="preped"]').prop("checked", value.preped);
        $('#page-3 #spells #level-5 .spells .spell:nth-child(' + child + ') input[name="spell-name"]').val(value.spell_name);
    });


    $('#page-3 #spells #level-6 input[name="total-6"]').val(loadJson.page3.spells.level_6.total);
    //In changes.js
    updateSpellSlots($('#page-3 #spells #level-6 input[name="total-6"]'));
    $.each(loadJson.page3.spells.level_6.spells, function(index, value) {
        var child = index + 1;
        $('#page-3 #spells #level-6 .spells .spell:nth-child(' + child + ') input[name="preped"]').prop("checked", value.preped);
        $('#page-3 #spells #level-6 .spells .spell:nth-child(' + child + ') input[name="spell-name"]').val(value.spell_name);
    });


    $('#page-3 #spells #level-7 input[name="total-7"]').val(loadJson.page3.spells.level_7.total);
    //In changes.js
    updateSpellSlots($('#page-3 #spells #level-7 input[name="total-7"]'));
    $.each(loadJson.page3.spells.level_7.spells, function(index, value) {
        var child = index + 1;
        $('#page-3 #spells #level-7 .spells .spell:nth-child(' + child + ') input[name="preped"]').prop("checked", value.preped);
        $('#page-3 #spells #level-7 .spells .spell:nth-child(' + child + ') input[name="spell-name"]').val(value.spell_name);
    });


    $('#page-3 #spells #level-8 input[name="total-8"]').val(loadJson.page3.spells.level_8.total);
    //In changes.js
    updateSpellSlots($('#page-3 #spells #level-8 input[name="total-8"]'));
    $.each(loadJson.page3.spells.level_8.spells, function(index, value) {
        var child = index + 1;
        $('#page-3 #spells #level-8 .spells .spell:nth-child(' + child + ') input[name="preped"]').prop("checked", value.preped);
        $('#page-3 #spells #level-8 .spells .spell:nth-child(' + child + ') input[name="spell-name"]').val(value.spell_name);
    });


    $('#page-3 #spells #level-9 input[name="total-9"]').val(loadJson.page3.spells.level_9.total);
    //In changes.js
    updateSpellSlots($('#page-3 #spells #level-9 input[name="total-9"]'));
    $.each(loadJson.page3.spells.level_9.spells, function(index, value) {
        var child = index + 1;
        $('#page-3 #spells #level-9 .spells .spell:nth-child(' + child + ') input[name="preped"]').prop("checked", value.preped);
        $('#page-3 #spells #level-9 .spells .spell:nth-child(' + child + ') input[name="spell-name"]').val(value.spell_name);
    });



});