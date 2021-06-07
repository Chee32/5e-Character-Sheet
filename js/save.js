function getAttacks() {
    var attacks = [];
    $('#page-1 #attacks-spells #attacks tr').each(function(argument) {
        if ($(this).find('th').length == 0) {
            var temp = {}
            temp.name = $(this).find('input[name="name"]').val();
            temp.stat = $(this).find('input[name="stat"]').val();
            temp.toHit = $(this).find('input[name="toHit"]').val();
            temp.damage = $(this).find('input[name="damage"]').val();
            temp.damage_type = $(this).find('input[name="damage_type"]').val();
            attacks.push(temp);
        }
    });

    return attacks;
}

function getCharges(charge) {
    var charges = [];
    $('#page-1 #charges #charge-' + charge + ' input[type="checkbox"]').each(function() {
        if ($(this).prop('checked') == true) {
            charges.push($(this).prop('name'));
        }
    });
    return charges;
}

function getEquipment(argument) {
    var equ = {
        col_1: [],
        col_2: []
    }
    $('#page-2 #equipment .col-1 tr:not(#total)').each(function(argument) {
        if ($(this).find('th').length == 0) {
            var temp = {};
            temp.name = $(this).find('input[name="name"]').val();
            temp.weight = $(this).find('input[name="weight"]').val();
            equ.col_1.push(temp);
        }
    });

    $('#page-2 #equipment .col-2 tr:not(#total)').each(function(argument) {
        if ($(this).find('th').length == 0) {
            var temp = {};
            temp.name = $(this).find('input[name="name"]').val();
            temp.weight = $(this).find('input[name="weight"]').val();
            equ.col_2.push(temp);
        }
    });

    return equ;
}

function getSpells(spellLevel) {
    var spells = [];
    $('#page-3 #spells #' + spellLevel + ' .spells .spell').each(function(argument) {
        var temp = {};
        if (spellLevel != 'cantrips')
            temp.preped = $(this).find('input[name="preped"]').prop('checked');
        temp.spell_name = $(this).find('input[name="spell-name"]').val();
        spells.push(temp);
    });

    return spells
}

function saveSheet(argument) {

    var sheet = {
        page1: {
            basic_info: {
                char_name: $('#character-basic-info #basic-info input[name="char-name"]').val(),
                level: $('#character-basic-info #basic-info input[name="level"]').val(),
                level_two: $('#character-basic-info #basic-info input[name="level-two"]').val(),
            },
            character_info: {
                race_class: $('#character-basic-info #character-info input[name="race-class"]').val(),
                background: $('#character-basic-info #character-info input[name="background"]').val(),
                player_name: $('#character-basic-info #character-info input[name="player-name"]').val(),
                exp: $('#character-basic-info #character-info input[name="exp"]').val(),
                alignment: $('#character-basic-info #character-info input[name="alignment"]').val(),
                deity: $('#character-basic-info #character-info input[name="deity"]').val()
            },
            top_bar: {
                proficiency: $('#page-1 #top-bar input[name="proficiency"]').val(),
                initiative: $('#page-1 #top-bar input[name="initiative"]').val(),
                passive_perception: $('#page-1 #top-bar input[name="passive-perception"]').val(),
                ac: $('#page-1 #top-bar input[name="ac"]').val(),
                speed: $('#page-1 #top-bar input[name="speed"]').val(),
                spell_dc: $('#page-1 #top-bar input[name="spell-dc"]').val(),
                insperation: $('#page-1 #top-bar input[name="insperation"]').val()
            },
            attributes: {
                str: $('#page-1 #attributes input[name="str"]').val(),
                str_mod: $('#page-1 #attributes input[name="str-mod"]').val(),
                dex: $('#page-1 #attributes input[name="dex"]').val(),
                dex_mod: $('#page-1 #attributes input[name="dex-mod"]').val(),
                con: $('#page-1 #attributes input[name="con"]').val(),
                con_mod: $('#page-1 #attributes input[name="con-mod"]').val(),
                int: $('#page-1 #attributes input[name="int"]').val(),
                int_mod: $('#page-1 #attributes input[name="int-mod"]').val(),
                wis: $('#page-1 #attributes input[name="wis"]').val(),
                wis_mod: $('#page-1 #attributes input[name="wis-mod"]').val(),
                cha: $('#page-1 #attributes input[name="cha"]').val(),
                cha_mod: $('#page-1 #attributes input[name="cha-mod"]').val()
            },
            saves_skills: {
                spell_casting: $('#page-1 #saves-skills select[name="spell-att"]').val(),
                saves: {
                    str_save: {
                        val: $('#page-1 #saves-skills #saves input[name="str-save"]').val(),
                        prof: $('#page-1 #saves-skills #saves #str-save input[name="prof"]').prop("checked")
                    },
                    dex_save: {
                        val: $('#page-1 #saves-skills #saves input[name="dex-save"]').val(),
                        prof: $('#page-1 #saves-skills #saves #dex-save input[name="prof"]').prop("checked")
                    },
                    con_save: {
                        val: $('#page-1 #saves-skills #saves input[name="con-save"]').val(),
                        prof: $('#page-1 #saves-skills #saves #con-save input[name="prof"]').prop("checked")
                    },
                    int_save: {
                        val: $('#page-1 #saves-skills #saves input[name="int-save"]').val(),
                        prof: $('#page-1 #saves-skills #saves #int-save input[name="prof"]').prop("checked")
                    },
                    wis_save: {
                        val: $('#page-1 #saves-skills #saves input[name="wis-save"]').val(),
                        prof: $('#page-1 #saves-skills #saves #wis-save input[name="prof"]').prop("checked")
                    },
                    cha_save: {
                        val: $('#page-1 #saves-skills #saves input[name="cha-save"]').val(),
                        prof: $('#page-1 #saves-skills #saves #cha-save input[name="prof"]').prop("checked")
                    },
                },
                skills: {
                    acrobatics: {
                        val: $('#page-1 #saves-skills #skills input[name="acrobatics-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #acrobatics-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #acrobatics-skill input[name="expr"]').prop("checked")
                    },
                    animal_handling: {
                        val: $('#page-1 #saves-skills #skills input[name="animal-handling-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #animal-handling-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #animal-handling-skill input[name="expr"]').prop("checked")
                    },
                    arcana: {
                        val: $('#page-1 #saves-skills #skills input[name="arcana-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #arcana-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #arcana-skill input[name="expr"]').prop("checked")
                    },
                    athletics: {
                        val: $('#page-1 #saves-skills #skills input[name="athletics-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #athletics-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #athletics-skill input[name="expr"]').prop("checked")
                    },
                    deception: {
                        val: $('#page-1 #saves-skills #skills input[name="deception-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #deception-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #deception-skill input[name="expr"]').prop("checked")
                    },
                    history: {
                        val: $('#page-1 #saves-skills #skills input[name="history-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #history-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #history-skill input[name="expr"]').prop("checked")
                    },
                    insight: {
                        val: $('#page-1 #saves-skills #skills input[name="insight-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #insight-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #insight-skill input[name="expr"]').prop("checked")
                    },
                    intimidation: {
                        val: $('#page-1 #saves-skills #skills input[name="intimidation-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #intimidation-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #intimidation-skill input[name="expr"]').prop("checked")
                    },
                    investigation: {
                        val: $('#page-1 #saves-skills #skills input[name="investigation-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #investigation-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #investigation-skill input[name="expr"]').prop("checked")
                    },
                    medicine: {
                        val: $('#page-1 #saves-skills #skills input[name="medicine-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #medicine-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #medicine-skill input[name="expr"]').prop("checked")
                    },
                    nature: {
                        val: $('#page-1 #saves-skills #skills input[name="nature-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #nature-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #nature-skill input[name="expr"]').prop("checked")
                    },
                    perception: {
                        val: $('#page-1 #saves-skills #skills input[name="perception-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #perception-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #perception-skill input[name="expr"]').prop("checked")
                    },
                    performance: {
                        val: $('#page-1 #saves-skills #skills input[name="performance-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #performance-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #performance-skill input[name="expr"]').prop("checked")
                    },
                    persuasion: {
                        val: $('#page-1 #saves-skills #skills input[name="persuasion-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #persuasion-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #persuasion-skill input[name="expr"]').prop("checked")
                    },
                    religion: {
                        val: $('#page-1 #saves-skills #skills input[name="religion-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #religion-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #religion-skill input[name="expr"]').prop("checked")
                    },
                    sleight_hand: {
                        val: $('#page-1 #saves-skills #skills input[name="sleight-hand-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #sleight-hand-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #sleight-hand-skill input[name="expr"]').prop("checked")
                    },
                    stealth: {
                        val: $('#page-1 #saves-skills #skills input[name="stealth-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #stealth-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #stealth-skill input[name="expr"]').prop("checked")
                    },
                    survival: {
                        val: $('#page-1 #saves-skills #skills input[name="survival-skill"]').val(),
                        prof: $('#page-1 #saves-skills #skills #survival-skill input[name="prof"]').prop("checked"),
                        expr: $('#page-1 #saves-skills #skills #survival-skill input[name="expr"]').prop("checked")
                    }
                }
            },
            status: {
                conditions: $('#page-1 #status #conditions textarea[name="conditions"]').val(),
                boons: $('#page-1 #status #boons textarea[name="boons"]').val(),
                death_saves: {
                    success: {
                        one: $('#page-1 #status #death-saves input[name="success-1"]').prop("checked"),
                        two: $('#page-1 #status #death-saves input[name="success-2"]').prop("checked"),
                        three: $('#page-1 #status #death-saves input[name="success-3"]').prop("checked")
                    },
                    failure: {
                        one: $('#page-1 #status #death-saves input[name="failure-1"]').prop("checked"),
                        two: $('#page-1 #status #death-saves input[name="failure-2"]').prop("checked"),
                        three: $('#page-1 #status #death-saves input[name="failure-3"]').prop("checked")
                    }
                },
                hit_dice: {
                    type: $('#page-1 #status #hit-dice input[name="hit-dice"]').val(),
                    current_hd: $('#page-1 #status #hit-dice input[name="current-hd"]').val()
                },
                temp_health: $('#page-1 #status #hit-points input[name="temp-health"]').val(),
                current_health: $('#page-1 #status #hit-points input[name="current-health"]').val(),
                max_health: $('#page-1 #status #hit-points input[name="max-health"]').val()
            },
            proficiencies: {
                weapon_armor: $('#page-1 #proficiencies #weapons-armor textarea[name="weapons-armor"]').val(),
                tools: $('#page-1 #proficiencies #tools textarea[name="tools"]').val(),
                languages: $('#page-1 #proficiencies #languages textarea[name="languages"]').val()
            },
            attacks_spells: getAttacks(),
            charges: {
                charge_1: {
                    name: $('#page-1 #charges input[name="charge-1"]').val(),
                    total: getCharges(1)
                },
                charge_2: {
                    name: $('#page-1 #charges input[name="charge-2"]').val(),
                    total: getCharges(2)
                },
                charge_3: {
                    name: $('#page-1 #charges input[name="charge-3"]').val(),
                    total: getCharges(3)
                },
                charge_4: {
                    name: $('#page-1 #charges input[name="charge-4"]').val(),
                    total: getCharges(4)
                },
                charge_5: {
                    name: $('#page-1 #charges input[name="charge-5"]').val(),
                    total: getCharges(5)
                },
                charge_6: {
                    name: $('#page-1 #charges input[name="charge-6"]').val(),
                    total: getCharges(6)
                }
            },
            features: $('#page-1 #features textarea[name="features"]').val()
        },
        page2: {
            equipment: {
                val: getEquipment(),
                total_weight: $('#page-2 #equipment tr#total input[name="total-weight"').val(),
                currency: {
                    copper: $('#page-2 #currancy input[name="copper"]').val(),
                    silver: $('#page-2 #currancy input[name="silver"]').val(),
                    gold: $('#page-2 #currancy input[name="gold"]').val(),
                    electrum: $('#page-2 #currancy input[name="electrum"]').val(),
                    platinum: $('#page-2 #currancy input[name="platinum"]').val(),
                    total: $('#page-2 #currancy input[name="total"]').val(),
                    base: $('#page-2 #currancy select[name="base"]').val()
                },
                encumberance: {
                    base: $('#page-2 #encumberance input[name="base-encumberance"]').val(),
                    encumbered: $('#page-2 #encumberance input[name="encumbered-encumberance"]').val(),
                    h_encumbered: $('#page-2 #encumberance input[name="h-encumbered-encumberance"]').val(),
                    push: $('#encumberance input[name="push-encumberance"]').val()
                }
            },
            attacks_spells: getAttacks(),
            mount_pet: {
                name: $('#page-2 #mount-pet input[name="mount-name"]').val(),
                type: $('#page-2 #mount-pet input[name="mount-type"]').val(),
                health: $('#page-2 #mount-pet input[name="mount-health"]').val(),
                ac: $('#page-2 #mount-pet input[name="mount-ac"]').val(),
                speed: $('#page-2 #mount-pet input[name="mount-speed"]').val(),
                notes: $('#page-2 #mount-pet textarea[name="mount-notes"]').val()
            },
            mount_pet2: {
                name2: $('#page-2 #mount-pet input[name="mount-name-2"]').val(),
                type2: $('#page-2 #mount-pet input[name="mount-type-2"]').val(),
                health2: $('#page-2 #mount-pet input[name="mount-health-2"]').val(),
                ac2: $('#page-2 #mount-pet input[name="mount-ac-2"]').val(),
                speed2: $('#page-2 #mount-pet input[name="mount-speed-2"]').val(),
                notes2: $('#page-2 #mount-pet textarea[name="mount-notes-2"]').val()
            }

        },
        page4: {
            backstory: $('#page-4 #backstory textarea[name="backstory"]').val(),
            allies_organizations: {
                name: $('#page-4 #allies-organizations input[name="name"]').val(),
                val: $('#page-4 #allies-organizations textarea[name="allies-organizations"]').val()
            },
            personality: {
                personality_traits: $('#personality #personality-traits textarea[name="personality-traits"]').val(),
                ideals: $('#personality #ideals textarea[name="ideals"]').val(),
                bonds: $('#personality #bonds textarea[name="bonds"]').val(),
                flaws: $('#personality #flaws textarea[name="flaws"]').val()
            },
        },
        page3: {
            spell_info: {
                class: $('#page-3 #spell-info input[name="class"]').val(),
                att: $('#page-3 #spell-info input[name="att"]').val(),
                dc: $('#page-3 #spell-info input[name="dc"]').val(),
                bonus: $('#page-3 #spell-info input[name="bonus"]').val()
            },
            spells: {
                cantrips: {
                    spells: getSpells('cantrips')
                },
                level_1: {
                    total: $('#page-3 #spells input[name="total-1"]').val(),
                    spells: getSpells('level-1')
                },
                level_2: {
                    total: $('#page-3 #spells input[name="total-2"]').val(),
                    spells: getSpells('level-2')
                },
                level_3: {
                    total: $('#page-3 #spells input[name="total-3"]').val(),
                    spells: getSpells('level-3')
                },
                level_4: {
                    total: $('#page-3 #spells input[name="total-4"]').val(),
                    spells: getSpells('level-4')
                },
                level_5: {
                    total: $('#page-3 #spells input[name="total-5"]').val(),
                    spells: getSpells('level-5')
                },
                level_6: {
                    total: $('#page-3 #spells input[name="total-6"]').val(),
                    spells: getSpells('level-6')
                },
                level_7: {
                    total: $('#page-3 #spells input[name="total-7"]').val(),
                    spells: getSpells('level-7')
                },
                level_8: {
                    total: $('#page-3 #spells input[name="total-8"]').val(),
                    spells: getSpells('level-8')
                },
                level_9: {
                    total: $('#page-3 #spells input[name="total-9"]').val(),
                    spells: getSpells('level-9')
                }
            }
        },
        page5: {
            notes_1: $('#page-5 #notes-1 textarea[name="notes-1"]').val(),
            notes_2: $('#page-5 #notes-2 textarea[name="notes-2"]').val()
        }
    }

    var saveString = "var loadJson = ";
    var saveString = saveString + JSON.stringify(sheet);

    var file = new Blob([saveString], { type: 'application/json' });
    var a = document.createElement("a"),
        url = URL.createObjectURL(file);
    a.href = url;
    a.download = 'savedSheet';
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
    }, 0);
}