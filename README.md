<h1>Blog, written with AngularJS</h1>
This is a simple blog, written with AngularJS for learning purposes. If you want to launch this, make sure to modify the example-settings.php
and rename it to settings.php. The project must run on a php server with MySQL and with the following database-structure:

TABLE post with the following attributes: p_id INT AUTO_INCREMENT author INT title VARCHAR content VARCHAR created_at TIMESTAMP

TABLE user u_id INT AUTO_INCREMENT username VARCHAR password VARCHAR

Make sure to reference the author attribute of the post table with the u_id in the user table.

A Demo-SQL-Script will be posted soon.
