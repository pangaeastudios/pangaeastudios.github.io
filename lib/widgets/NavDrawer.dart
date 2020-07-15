import 'package:flutter/material.dart';

class NavDrawer extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Drawer(
      child: Column(
        children: [
          Divider(),
          Text('LOGO HERE'),
          Divider(),
          FlatButton(
              onPressed: () {},
              child: Text('General Settings'),
          ),
          FlatButton(
            onPressed: () {},
            child: Text('XR Settings'),
          ),
          FlatButton(
            onPressed: () {},
            child: Text('Privacy Settings'),
          ),
          Divider(),
          IconButton(
            onPressed: () {},
            icon: Icon(Icons.photo_camera),
          ),
        ],
      ),
    );
  }
}
