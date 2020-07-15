import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:pangaea_studios_app/helpers/styling.dart';

Widget DrawerText({String text, double fontSize = 20.0}) => Container(
  alignment: Alignment.centerLeft,
  child: Text(
    text,
    style: TextStyle(
      fontSize: fontSize
    ),
  ),
);

class NavDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Container(
        padding: EdgeInsets.only(top: 100.0),
        child: Column(
          children: [
            Image.asset('assets/images/logo_notext.png'),
            TransparentDivider(space: 50.0),
            FlatButton(
                onPressed: () {},
                child: DrawerText(text: 'General Settings'),
            ),
            FlatButton(
              onPressed: () {},
              child: DrawerText(text: 'XR Settings'),
            ),
            FlatButton(
              onPressed: () {},
              child: DrawerText(text: 'Privacy Settings'),
            ),
            TransparentDivider(space: 60.0),
            IconButton(
              iconSize: 70,
              onPressed: () {},
              icon: Icon(Icons.photo_camera),
            ),
          ],
        ),
      ),
    );
  }
}
