let input = document.getElementById('ag-number'),
    $number = input.value;

input.oninput = function() {
   $number = input.value; 
}; 

console.log($number);


$prod_time = function number_to_string() {
  $arr_numbers = new Array();
  $arr_numbers[1] = new Array('', 'один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять', 'десять', 'одиннадцать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать');
  $arr_numbers[2] = new Array('', '', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто');
  $arr_numbers[3] = new Array('', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот');

  function number_parser($num, $desc) { // нужны параметры
    let $string = ''; // должна быть локальная переменная let или var
    $num_hundred = '';
    if ($num.length == 3) {
      $num_hundred = $num.substr(0, 1);
      $num = $num.substr(1, 3);
      $string = $arr_numbers[3][$num_hundred] + ' ';
    }
    if (+$num < 20) $string += $arr_numbers[1][parseFloat($num)] + ' '; /* + сравнивать число не строку */
    else {
      $first_num = $num.substr(0, 1);
      $second_num = $num.substr(1, 2);
      $string += $arr_numbers[2][$first_num] + ' ' + $arr_numbers[1][$second_num] + ' ';
    }
    switch ($desc) {
      case 0:
        $last_num = parseFloat($num.substr(-1));
        $pre_last_num = $num.substr(-2);
        $pre_last_num = $pre_last_num.split("");
        $pre_last_num = parseFloat($pre_last_num[0]);
        if ($last_num == 1 && 1 != $pre_last_num) $string += 'рубль';
        else if ($last_num == 1 && 1 == $pre_last_num.length) $string += 'рубль';
        else if ($last_num > 1 && $last_num < 5 && 1 != $pre_last_num) $string += 'рубля';
        else if ($pre_last_num.length > 1) $string += 'рублей';
        else if ($pre_last_num.length = 1 && $last_num > 4) $string += 'рублей';
        else if ($pre_last_num.length = 1 && 0 == $last_num) $string += 'рублей'; // не 'Ноль рублей'
        else $string += 'рубль';
        break;
      case 1:
        $last_num = parseFloat($num.substr(-1));
        $pre_last_num = $num.substr(-2);
        $pre_last_num = $pre_last_num.split("");
        $pre_last_num = parseFloat($pre_last_num[0]);
        if ($last_num == 1 && 1 != $pre_last_num) $string += 'тысяча ';
        else if ($last_num == 1 && 1 == $pre_last_num.length) $string += 'тысяча ';
        else if ($last_num > 1 && $last_num < 5 && 1 != $pre_last_num) $string += 'тысячи ';
        else $string += 'тысяч ';
        $string = $string.replace('один ', 'одна ');
        $string = $string.replace('два ', 'две ');
        break;
      case 2:
        $last_num = parseFloat($num.substr(-1));
        $pre_last_num = $num.substr(-2);
        $pre_last_num = $pre_last_num.split("");
        $pre_last_num = parseFloat($pre_last_num[0]);
        if ($last_num == 1) $string += 'миллион ';
        else if ($last_num == 1 && 1 != $pre_last_num) $string += 'миллион ';
        else if ($last_num == 1 && 1 == $pre_last_num.length) $string += 'миллион ';
        else if ($last_num > 1 && $last_num < 5 && 1 != $pre_last_num) $string += 'миллиона ';
        else $string += 'миллионов ';
        break;
      case 3:
        $last_num = parseFloat($num.substr(-1));
        $pre_last_num = $num.substr(-2);
        $pre_last_num = $pre_last_num.split("");
        $pre_last_num = parseFloat($pre_last_num[0]);
        if ($last_num == 1 && 1 != $pre_last_num) $string += 'миллиард ';
        else if ($last_num == 1 && 1 == $pre_last_num.length) $string += 'миллиард ';
        else if ($last_num > 1 && $last_num < 5 && 1 != $pre_last_num) $string += 'миллиарда ';
        else $string += 'миллиардов ';
        break;
    }
    return $string;
  }

  function decimals_parser($num) { // нужны параметры
    $first_num = $num.substr(0, 1);
    $second_num = parseFloat($num.substr(1, 2));
    $string = ' ' + $first_num + $second_num;
    if ($second_num == 1 && 1 != $first_num) $string += ' копейка';
    else if ($second_num > 1 && $second_num < 5 && 1 != $first_num) $string += ' копейки';
    else $string += ' копеек';
    return $string;
  }
  if (!$number || $number == 0) return 'Ноль рублей';
  if (typeof $number !== 'number') {
    $number = $number.replace(',', '.');
    $number = parseFloat($number);
    if (isNaN($number)) return 'Ноль рублей';
  }
  $number = $number.toFixed(2);
  if ($number.indexOf('.') != -1) {
    $number_arr = $number.split('.');
    $number = $number_arr[0];
    $number_decimals = $number_arr[1];
  }
  $number_length = $number.length;
  $string = '';
  $num_parser = '';
  $count = 0;
  for ($p = ($number_length - 1); $p >= 0; $p--) {
    $num_digit = $number.substr($p, 1);
    $num_parser = $num_digit + $num_parser;
    if (($num_parser.length == 3 || $p == 0) && !isNaN(parseFloat($num_parser))) {
      $string = number_parser($num_parser, $count) + $string;
      $num_parser = '';
      $count++;
    }
  }
  if ($number_decimals) $string += decimals_parser($number_decimals, 2);
  $string = $string.charAt(0).toUpperCase() + $string.substr(1).toLowerCase();
  $string = $string.replace(/\s+/g, ' ');
  return $string;
}

  console.log($prod_time());

  let agBtn = document.getElementById('ag-btn'),
      agResult = document.getElementById('ag-result');

  agBtn.addEventListener('click', function () {
    agResult.innerHTML = $prod_time();
  });