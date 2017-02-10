<!DOCTYPE html>
<html>
<head>
	<title></title>
	<meta charset="utf-8" />
</head>
<body>
<?php
	class SQLite3_PL_DB extends SQLite3 {
		function __construct() {
			$this->open();
		}
	}

	SQLite3_PL_DB test = new SQLite3_PL_DB('file.db');
	test.close();
?>
</body>
</html>
