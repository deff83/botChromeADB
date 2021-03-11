package com.Deff83;
import com.Deff83.nativeObj.W32APIOptions;
import com.sun.jna.Library;
import com.sun.jna.Native;

import com.sun.jna.win32.*;


public interface User32Library extends Library {

		// TODO Auto-generated constructor stub
		User32Library user32 = (User32Library) Native.loadLibrary("user32", User32Library.class,W32APIOptions.DEFAULT_OPTIONS);
		boolean SystemParametersInfo(int one, int two, String s, int three);
	

}
