function att_attack() {
	var name = $('#attack-form input[name="name"]').val();
	var stat = $('#attack-form select[name="stat"]').val();
	var base = parseInt($('#attributes input[name="'+ stat +'-mod"]').val()) || 0;
	var dice = $('#attack-form input[name="dice"]').val();
	var bonus = parseInt($('#attack-form input[name="bonus"]').val()) || 0;
	var damage_type = $('#attack-form input[name="dmg-type"]').val();

	if ($('#attack-form select[name="type"]').val() == 'toHit') {
		if ( $('#attack-form input[name="proficiency"]').prop("checked") == true) {
			var prof = parseInt($('#top-bar input[name="proficiency"]').val()) || 0;
		} else {
			var prof = 0;
		}
		var to_hit = ((base + prof +bonus)<0?"":"+") + (base + prof + bonus);
	} else {
		var dc = $('#attack-form input[name="dc"]').val();
	}
	var damage_bonus = base + bonus;
	var damage = dice + ((damage_bonus)<0?"":"+") + damage_bonus;

	$('#attacks tbody').append(
		`
		<tr>
			<td><input type="text" name="name" value="`+ name +`"/></td>
			<td><input type="text" name="stat" value="`+ stat +`"/></td>
			<td><input type="text" name="toHit" value="`+ (to_hit?to_hit : dc) +`"/></td>
			<td><input type="text" name="damage" value="`+ damage +`"/></td>
			<td><input type="text" name="damage_type" value="`+ damage_type +`"/></td>
			<td><button>X</button></td>
		</tr>
		`
	);

}

$('document').ready(function (argument) {

	$('#attack-form select[name="type"]').change(function (argument) {
		if ($(this).val() == 'toHit') {
			$('#attack-form #attack-prof').show()
			$('#attack-form #attack-dc').hide();
		} else {
			$('#attack-form #attack-dc').show()
			$('#attack-form #attack-prof').hide();
		}
	});

	$('#attack-form input[name="spell-dc"]').change(function (argument) {
		var dc = parseInt($('#top-bar input[name="spell-dc"]').val()) || 0;
		$('#attack-form input[name="dc"]').val(dc);
	});

	$('#attacks tbody').on('click', 'button', function (argument) {
		$(this).parent().parent().remove();
	});

});